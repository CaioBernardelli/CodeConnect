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
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterModule, MatButtonModule, MatMenuModule, MatBadgeModule, NotificationListComponent,CoursesListComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  notifications: Notification[] = []; // Corrigido para 'notifications'
  listSelectedCourses: Course[] = [];
 
  constructor(private notificationService: NotificationService, private checkoutService : CheckoutService) {
//
    this.notificationService.listar().subscribe((notification) => {
      this.notifications = notification;
   //   
      this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    });

  }
}

