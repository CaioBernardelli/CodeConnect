import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule


import { Usuario } from '../../model/usuario';
import { Course } from '../../model/course.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/checkout/usuario.service';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service';
import { NotificationService } from '../../services/checkout/notification.service';




@Component({
  selector: 'app-admin-dashboard',
  standalone: true, // Se for standalone
  imports: [CommonModule, FormsModule], // Importe o CommonModule diretamente aqui
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  usuarios: Usuario[] = [];
  cursos: Course[] = [];
  mensagemNotificacao: string = ''; // Adicionado para controlar a mensagem de notificação

  
  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private checkoutService: CheckoutService, 
    private usuarioFirestoreService: UsuarioFirestoreService,
    private httpClient: HttpClient ,// Importando HttpClient,
    private notificationService :  NotificationService

  ) { }

  ngOnInit(): void {
    this.carregarUsuarios(); 
    this.carregarCursos()// Carrega usuários ao iniciar
  }

  carregarUsuarios() {
    this.usuarioFirestoreService.listar().subscribe((dados: Usuario[]) => {
      this.usuarios = dados;
    });
  }

  carregarCursos() {
    this.checkoutService.getListCourse().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  adicionarCurso() {
    this.router.navigate(['/adicionar-curso']);
  }

  cadastrarUsuario() {
    this.router.navigate(['/cadastro-usuario']); // Navegação para a página de cadastro
  }

  async editarUsuario(usuario: Usuario) {
    usuario.nome = prompt('Digite o novo nome:', usuario.nome) || usuario.nome;
      await this.usuarioFirestoreService.atualizarUsuario(usuario);
      this.carregarUsuarios();
    
  }
  

  removerUsuario(id: string) {
    this.usuarioFirestoreService.remover(id).then(() => {
      this.carregarUsuarios();
    });
  }

  editarCurso(curso: Course) {
    curso.name = prompt('Digite o novo nome do curso:', curso.name) || curso.name;
    this.checkoutService.updateCourse(curso).subscribe(() => {
      this.carregarCursos();
    });
  }

  removerCurso(id: string) {
    this.checkoutService.deleteCourse(id).subscribe(() => this.carregarCursos());
  }

  voltarParaHome() {
    this.usuarioFirestoreService.logout();
    this.router.navigate(['/']);
  }

  voltarParaInicio() {
    this.router.navigate(['/courses-carousel']);
  }

  enviarNotificacao() {
    const notification = {
      message: this.mensagemNotificacao,
      date: new Date().toISOString(),
      type: 'user'
    };
  
    this.notificationService.enviarNotificacao(notification).subscribe(() => {
      alert('Notificação enviada com sucesso!');
      this.mensagemNotificacao = ''; // Limpa o campo de notificação
    }, error => {
      console.error('Erro ao enviar notificação:', error);
      alert('Erro ao enviar notificação');
    });
  }
}
