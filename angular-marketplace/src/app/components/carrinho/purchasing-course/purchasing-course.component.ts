import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../model/course.model';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-purchasing-course',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule],
  templateUrl: './purchasing-course.component.html',
  styleUrls: ['./purchasing-course.component.scss']
})
export class PurchasingCourseComponent implements OnInit {
  listSelectedCourses: Course[] = [];
  totalPrice!: number; // Inicializando com 0 para evitar problemas com valores indefinidos
  disabled = false;
  hide = true;

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.totalPrice = this.checkoutService.totalPrice;
    this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    this.toggleButton();
  }


  toggleButton() {
    if(this.listSelectedCourses.length == 0){
      this.disabled = true;
    }



  }
}
