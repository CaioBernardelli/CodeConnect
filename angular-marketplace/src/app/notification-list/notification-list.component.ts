import { Component, OnInit } from '@angular/core';
import { Notification } from '../model/notificaton';
import { NotificationService } from '../services/checkout/notification.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [MatIconModule,MatMenuModule,CommonModule],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss'
})
export class NotificationListComponent implements OnInit { // Implementado OnInit
  notifications: Notification[] = []; // Corrigido para 'notifications'

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.listar().subscribe({
      next: (notificationsRetornados) => this.notifications = notificationsRetornados,
      error: (err) => console.error('Erro ao carregar notificações', err) // Incluído tratamento de erro
    });
  }
}
