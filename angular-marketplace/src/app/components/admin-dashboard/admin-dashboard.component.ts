import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Usuario } from '../../model/usuario';
import { Course } from '../../model/course.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/checkout/usuario.service';
import { CheckoutService } from '../../services/checkout/checkout.service';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true, // Se for standalone
  imports: [CommonModule], // Importe o CommonModule diretamente aqui
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  usuarios: Usuario[] = [];
  cursos: Course[] = [];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private checkoutService: CheckoutService
  ) { }

  ngOnInit(): void {
    // Inicialmente, não carrega nem usuários nem cursos.
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

  adicionarCurso() {
    this.router.navigate(['/adicionar-curso']); // Redireciona para a página de adicionar curso
  }

  editarUsuario(usuario: Usuario) {
    usuario.nome = prompt('Digite o novo nome:', usuario.nome) || usuario.nome;
    this.usuarioService.atualizar(usuario).subscribe(() => {
      this.carregarUsuarios();
    });
  }



  editarCurso(curso: Course) {
    curso.name = prompt('Digite o novo nome do curso:', curso.name) || curso.name;
    this.checkoutService.updateCourse(curso).subscribe(() => {
      this.carregarCursos();
    });
  }

  removerCurso(id: number) {
    this.checkoutService.deleteCourse(id).subscribe(() => this.carregarCursos());
  }

  removerUsuario(id: number) {
    this.usuarioService.remover(id).subscribe(() => this.carregarUsuarios());
  }


}
