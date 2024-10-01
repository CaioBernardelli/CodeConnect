import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { generateUniqueId } from '../../Util/id-gerate';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MensagemSweetService } from '../../services/checkout/mensagem-sweet.service';
import { UsuarioService } from '../../services/checkout/usuario.service';
import { Usuario } from '../../model/usuario';
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service';

@Component({
  selector: 'app-cadastrousuario',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, FormsModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.scss']
})
export class CadastrousuarioComponent {
  usuarios: Usuario[] = [];
  usuario: Usuario = {
    id: '',
    nome: '', email: '', idade: 0,
    senha: ''
  }; // Propriedade `usuario` adicionada


  constructor(
    private roteador: Router,
    private rotaAtual: ActivatedRoute,
    private mensagemService: MensagemSweetService,
    private usuarioService: UsuarioService,
    private usuarioFirestoreService: UsuarioFirestoreService,
    
  ) {
    this.usuarioFirestoreService.listar().subscribe({
      next: (usuariosRetornados) => (this.usuarios = usuariosRetornados),
      error: (err) => this.mensagemService.erro(err.message),
    });
  }


     
       


inserir(usuario: Usuario) {
  try {
   

    // Inserir o usuário no Firestore
    this.usuarioFirestoreService.inserir(usuario)
      .then(() => {
        this.mensagemService.sucesso('Usuário cadastrado com sucesso.');
        // Adicionar o usuário inserido na lista local de usuários
        this.usuarios.push(usuario);
        // Navegar para outra página ou resetar o formulário após o cadastro
        this.roteador.navigate(['']);
      })
      .catch((err) => {
        this.mensagemService.erro(`Erro ao cadastrar usuário: ${err.message}`);
      });
  } catch (e: any) {
    this.mensagemService.erro(`Erro inesperado: ${e.message}`);
  }
}
}
