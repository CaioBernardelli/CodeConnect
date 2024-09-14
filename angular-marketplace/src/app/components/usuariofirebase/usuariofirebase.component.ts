import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../model/usuario';// Modelo de usuário
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service';



@Component({
  selector: 'app-usuariofirebase',
  standalone: true,
  imports: [
           CommonModule
     ],
  templateUrl: './usuariofirebase.component.html',
  styleUrl: './usuariofirebase.component.scss'
})
export class UsuariofirebaseComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioFirestoreService: UsuarioFirestoreService) {}
  ngOnInit(): void {
    this.usuarioFirestoreService.listar().subscribe((dados: Usuario[]) => {
      this.usuarios = dados; // Armazena os usuários retornados
    });
  }
}
