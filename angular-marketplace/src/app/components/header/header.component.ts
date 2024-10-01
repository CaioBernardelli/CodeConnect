import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { MatMenuModule, MatMenuPanel } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { NotificationListComponent } from '../notification-list/notification-list.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { Notification } from '../../model/notificaton';
import { NotificationService } from '../../services/checkout/notification.service';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { Course } from '../../model/course.model';
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    RouterModule, 
    MatButtonModule, 
    MatMenuModule, 
    MatBadgeModule, 
    NotificationListComponent,
    CoursesListComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  notifications: Notification[] = [];
  listSelectedCourses: Course[] = [];
  isAdmin: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private checkoutService: CheckoutService,
    private usuarioService: UsuarioFirestoreService,
    private router: Router
  ) {
    // Verifica se o usuário é administrador
    this.isAdmin = this.usuarioService.isAdmin();

    // Subscreve às notificações do serviço
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
    });

    // Carrega notificações conforme o tipo de usuário
    if (this.isAdmin) {
      this.notificationService.listarPorTipo('admin').subscribe();
    } else {
      this.notificationService.listarPorTipo('usuario').subscribe();
    }

    // Carrega os cursos selecionados
    this.listSelectedCourses = this.checkoutService.listSelectdCourse;
  }

  logout() {
    this.usuarioService.logout();  // Limpa os dados de autenticação
    this.router.navigate(['/login']);  // Redireciona para a página de login
  }
}
