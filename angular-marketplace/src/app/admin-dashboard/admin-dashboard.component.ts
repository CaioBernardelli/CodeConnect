import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../checkout/usuario.service';
import { CheckoutService } from '../checkout/checkout.service';
import { Usuario } from '../model/usuario';
import { Course } from '../list-films/course.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  usuarios: Usuario[] = [];
  cursos: Course[] = [];

  constructor(private usuarioService: UsuarioService, private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
    this.carregarCursos();
  }

  carregarUsuarios() {
    this.usuarioService.listar().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  carregarCursos() {
    this.checkoutService.getListCourse().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  // Adicione métodos para editar e remover usuários e cursos
}
