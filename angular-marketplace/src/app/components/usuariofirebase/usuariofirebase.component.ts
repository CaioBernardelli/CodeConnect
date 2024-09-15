import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../model/usuario';// Modelo de usuário
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-usuariofirebase',
  standalone: true,
  imports: [FormsModule,
           CommonModule,
           MatFormFieldModule,
           MatCardModule 
     ],
  templateUrl: './usuariofirebase.component.html',
  styleUrl: './usuariofirebase.component.scss'
})
export class UsuariofirebaseComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuario: Usuario = {
    id: '',
    nome: '', email: '', idade: 0,
    senha: ''
  }; // Propriedade `usuario` adicionada

  constructor(private usuarioFirestoreService: UsuarioFirestoreService) {}
  
  ngOnInit(): void {
    this.usuarioFirestoreService.listar().subscribe((dados: Usuario[]) => {
      this.usuarios = dados; // Armazena os usuários retornados
    });
  }

 
  inserir(usuario: Usuario) {
    this.usuarioFirestoreService.inserir(usuario)
      .then(() => {
        console.log("Usuário inserido com sucesso!"); // Limpa o formulário após inserir
      })
      .catch((erro) => {
        console.error("Erro ao inserir usuário: ", erro);
      });
  }


}
    
