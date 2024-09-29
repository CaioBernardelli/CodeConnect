import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MensagemSweetService } from '../services/checkout/mensagem-sweet.service';
import { UsuarioFirestoreService } from '../services/usuario-firestore.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, FormsModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corrigido para `styleUrls`
})
export class HomeComponent {
  usuarios: Usuario[] = [];
  usuario: Usuario = {
    id: '',
    nome: '', email: '', idade: 0,
    senha: ''
  };

  constructor(
    private roteador: Router,
    private rotaAtual: ActivatedRoute,
    private mensagemService: MensagemSweetService,
    private usuarioService: UsuarioFirestoreService // Certifique-se de que o método 'autenticar' existe
  ) {}

  logar(email: string, senha: string) {
    this.usuarioService.autenticar(email, senha).subscribe({
      next: (usuario: Usuario) => { // Definir o tipo explicitamente
        this.mensagemService.sucesso('Login realizado com sucesso');
        this.roteador.navigate(['/courses-carousel']); // Redireciona para a home
      },
      error: (err: any) => { // Definir o tipo do erro como 'any'
        this.mensagemService.erro('Email ou senha incorretos');
      }
    });
  }
}
