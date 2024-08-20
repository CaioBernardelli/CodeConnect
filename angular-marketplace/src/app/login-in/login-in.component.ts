import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemSweetService } from '../checkout/mensagem-sweet.service';
import { UsuarioService } from '../checkout/usuario.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login-in',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,FormsModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './login-in.component.html',
  styleUrl: './login-in.component.scss'
})
export class LoginInComponent {
  usuarios: Usuario[] = [];
  


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
          this.roteador.navigate(['pagina-principal']); // Redireciona para a página principal
        },
        error: (err) => {
          this.mensagemService.erro('Email ou senha incorretos');
        }
      });
    }
    
}
