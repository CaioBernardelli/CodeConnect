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
  selector: 'app-cadastrousuario',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,FormsModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.scss']
})
export class CadastrousuarioComponent {
  usuarios: Usuario[] = [];
  usuario: Usuario = { nome: '', email: '', idade: 0}; // Propriedade `usuario` adicionada


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

  inserir(usuario: Usuario) {
    try {
    this.usuarioService.inserir(usuario).subscribe({
      next: (usuarioInserido) => {
        this.usuarios.push(usuarioInserido);
     //   this.roteador.navigate(['listagem-usuarios']);
        this.mensagemService.sucesso('Usuário cadastrado com sucesso.');
      },
      error: (err) => this.mensagemService.erro(err.message),
    });
  } catch (e: any) {
    this.mensagemService.erro(e.message);  // Captura a exceção e exibe a mensagem de erro
  }
  }

}
