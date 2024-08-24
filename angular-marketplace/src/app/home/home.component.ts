import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemSweetService } from '../checkout/mensagem-sweet.service';
import { UsuarioService } from '../checkout/usuario.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,MatIconModule,MatButtonModule,FormsModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  usuarios: Usuario[] = [];
  usuario: Usuario = { id: 0,
    nome: '', email: '', idade: 0,
    senha: ''
  }; // Propriedade `usuario` adicionada


  constructor(
    private roteador: Router,
    private rotaAtual: ActivatedRoute,
    private mensagemService: MensagemSweetService,
    private usuarioService: UsuarioService
  ) {
    this.usuarioService.listar().subscribe({
      next: (usuariosRetornados) => (this.usuarios = usuariosRetornados),
      error: (err) => this.mensagemService.erro(err.message),
    });
  }

 
  logar(email: string, senha: string) {
    this.usuarioService.autenticar(email, senha).subscribe({
      next: (usuario) => {
        this.mensagemService.sucesso('Login realizado com sucesso');
        this.roteador.navigate(['courses-carousel']); // Redireciona para a página principal
      },
      error: (err) => {
        this.mensagemService.erro('Email ou senha incorretos');
      }
    });
  }
}

