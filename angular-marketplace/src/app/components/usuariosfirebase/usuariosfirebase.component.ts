import { Component, OnInit } from '@angular/core';
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service';
import { Usuario } from '../../model/usuario';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-usuariosfirebase',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './usuariosfirebase.component.html',
  styleUrl: './usuariosfirebase.component.scss'
})
export class UsuariosfirebaseComponent implements OnInit{

  usuarios: Usuario[] = []; // Array para armazenar os usuários

  constructor(private usuarioService: UsuarioFirestoreService) {}

  ngOnInit(): void {
    this.carregarUsuarios(); // Chama o método para carregar os usuários ao iniciar o componente
  }

  carregarUsuarios(): void {
    this.usuarioService.listar().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios; // Recebe a lista de usuários e armazena no array
      },
      (error) => {
        console.error('Erro ao carregar usuários:', error); // Exibe um erro no console, caso ocorra
      }
    );
  }
}


