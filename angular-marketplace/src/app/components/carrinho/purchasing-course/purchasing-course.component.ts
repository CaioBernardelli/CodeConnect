import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../model/course.model';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-purchasing-course',
  standalone: true,
  imports: [MatFormFieldModule,CommonModule,MatCardModule,MatListModule],
  templateUrl: './purchasing-course.component.html',
  styleUrls: ['./purchasing-course.component.scss']
})
export class PurchasingCourseComponent implements OnInit {
  @Input() course!: Course; // Recebe o curso do componente pai
  listSelectedCourses: Course[] = [];
  totalPrice!: number; // Inicializando com 0 para evitar problemas com valores indefinidos
  disabled = false;
  hide = true;

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.totalPrice = this.checkoutService.totalPrice;
    this.atualizarCursos()
    this.toggleButton();
  }


  toggleButton() {
    if(this.listSelectedCourses.length == 0){
      this.disabled = true;
    }

  }

  excluirTudo() {
    this.checkoutService.totalPrice = 0;
    this.totalPrice = 0;
    this.checkoutService.listSelectdCourse = [];
    this.listSelectedCourses = [];
    this.toggleButton();
    }
    
    excluir(course: Course) : void{
    this.totalPrice -= course.price;

    this.checkoutService.unselectCourse(course,course.price);//total nec

    this.listSelectedCourses = [...this.checkoutService.listSelectdCourse];

   console.log('Curso removido:', course);
  console.log('Cursos restantes:', this.listSelectedCourses);
    }


    atualizarCursos(): void {
      this.totalPrice = this.checkoutService.totalPrice;
      this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    }
}
