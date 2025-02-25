import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../model/course.model';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';  // ✅ Importação do Router


@Component({
  selector: 'app-purchasing-course',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatCardModule, MatListModule],
  templateUrl: './purchasing-course.component.html',
  styleUrls: ['./purchasing-course.component.scss']
})
export class PurchasingCourseComponent implements OnInit {
  listSelectedCourses: Course[] = [];
  totalPrice: number = 0;

  constructor(private checkoutService: CheckoutService,
    private router: Router  // <--- injetar
  ) {}

  ngOnInit(): void {
    this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    this.totalPrice = this.checkoutService.totalPrice;
  }

  excluir(course: Course): void {
    this.checkoutService.removeFromCart(course);
    this.listSelectedCourses = [...this.checkoutService.listSelectdCourse];
    this.totalPrice = this.checkoutService.totalPrice;
  }

  excluirTudo() {
    this.checkoutService.clearCart();
    this.listSelectedCourses = [];
    this.totalPrice = 0;
  }

  finalizarCompra() {
    // Cada curso do carrinho é marcado como comprado
    this.listSelectedCourses.forEach(course => {
      this.checkoutService.comprarCurso(course);
    });
  
    // Depois redireciona para a página "Meus Cursos"
    this.router.navigate(['/purchased-courses']);
  }

  
  
}
