import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model'; 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [ 
    MatIconModule,
    MatMenuModule,
    CommonModule,
    MatListModule,
    MatCardModule, ],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {
  listSelectedCourses: Course[] = [];// Corrigido para 'notifications'
  totalPrice!: number;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    console.log(this.listSelectedCourses.length)

    this.totalPrice = this.checkoutService.totalPrice;


    }
  }


