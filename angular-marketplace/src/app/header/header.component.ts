import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { UsuarioService } from '../services/checkout/usuario.service';
import { NotificationListComponent } from '../notification-list/notification-list.component';
import { NotificationService } from '../services/checkout/notification.service';
import { Notification } from '../model/notificaton';
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

