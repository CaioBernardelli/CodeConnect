import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model'; 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';


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

  constructor(private checkoutService: CheckoutService,private router: Router) { }

  ngOnInit(): void {
    this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    console.log(this.listSelectedCourses.length)

    this.atualizarCursos()


    }


    atualizarCursos(): void {
      this.totalPrice = this.checkoutService.totalPrice;
      this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    }

    comprar() : void{
      this.router.navigate(['/carrinho']);
      }
  }


