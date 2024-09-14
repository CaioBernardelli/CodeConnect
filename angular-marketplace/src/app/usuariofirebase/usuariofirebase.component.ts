import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { UsuarioFirestoreService } from '../services/usuario-firestore.service'; // Importa o serviço
import { Usuario } from '../model/usuario'; // Modelo de usuário
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuariofirebase',
  standalone: true,
  imports: [
     ],
  templateUrl: './usuariofirebase.component.html',
  styleUrl: './usuariofirebase.component.scss'
})
export class UsuariofirebaseComponent  {

  usuarios: Usuario[] = [];

  constructor(private usuarioFirestoreService: UsuarioFirestoreService, private router: Router) {}


 
}
