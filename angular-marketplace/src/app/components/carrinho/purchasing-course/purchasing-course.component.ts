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
  listSelectedCourses: Course[] = [];
   listSelectedCourses2: Course[] = [];
  totalPrice!: number; // Inicializando com 0 para evitar problemas com valores indefinidos
  disabled = false;
  hide = true;
  form: any;
  client: any = {};

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {


    this.form = document.querySelector('#form');
    this.form.addEventListener('click', (event: any) => {
      event.preventDefault();
    })
    this.totalPrice = this.checkoutService.totalPrice;
    this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    this.toggleButton();


    

  }

  
 

  trackByCourseId(index: number, course: Course): number {
    return course.id; // Supondo que o curso tenha um campo 'id'
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
    
    excluir(course: Course, card: HTMLElement) : void{
    this.totalPrice -= course.price;

    this.checkoutService.setCourse(course);//total nec
    this.checkoutService.unselectCourse2();//total nec
     if (this.totalPrice <= 0){

      this.excluirTudo();
     }
     this.excluirtemplate(card)

   console.log('Curso removido:', course);
    console.log('Cursos restantes:', this.listSelectedCourses);

    this.atualizarCursos();
    }


    atualizarCursos(): void {
      this.totalPrice = this.checkoutService.totalPrice;
      this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    }

    excluirtemplate(card: HTMLElement): void {
      // Adiciona a classe "hidden" ao elemento do curso para escondê-lo
      card.classList.add('hidden');
    }
    
}
