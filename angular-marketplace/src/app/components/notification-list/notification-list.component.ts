import { Component, OnInit } from '@angular/core';
import { Notification } from '../../model/notificaton';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/checkout/notification.service';
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service'; // Importe o serviço de usuário

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, CommonModule],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss'
})
export class NotificationListComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(
    private notificationService: NotificationService,
    private usuarioFirestoreService: UsuarioFirestoreService
  ) {}

  ngOnInit(): void {
    // Subscreve às notificações do serviço
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
    });

    // Verifica se o usuário é administrador e carrega as notificações
    if (this.usuarioFirestoreService.isAdmin()) {
      this.notificationService.listarPorTipo('admin').subscribe();
    } else {
      this.notificationService.listarPorTipo('user').subscribe();
    }
  }
}
