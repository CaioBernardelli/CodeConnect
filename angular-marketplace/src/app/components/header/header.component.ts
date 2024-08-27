import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { NotificationListComponent } from '../notification-list/notification-list.component';

import { Notification } from '../../model/notificaton';
import { NotificationService } from '../../services/checkout/notification.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterModule, MatButtonModule, MatMenuModule, MatBadgeModule, NotificationListComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  notifications: Notification[] = []; // Corrigido para 'notifications'

  constructor(private notificationService: NotificationService) {

    this.notificationService.listar().subscribe((notification) => {
      this.notifications = notification;


    });

  }
}

