import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../model/course.model';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-purchasing-course',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatCardModule, MatListModule],
  templateUrl: './purchasing-course.component.html',
  styleUrls: ['./purchasing-course.component.scss']
})
export class PurchasingCourseComponent implements OnInit, AfterViewInit {
  listSelectedCourses: Course[] = [];
  totalPrice!: number;
  disabled = false;
  form: any;
  client: any = {};

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.totalPrice = this.checkoutService.totalPrice;
    this.listSelectedCourses = this.checkoutService.listSelectdCourse;
    this.toggleButton();
  }

  ngAfterViewInit(): void {
    this.form = document.querySelector('#form');
    if (this.form) {
      this.form.addEventListener('click', (event: any) => {
        event.preventDefault();
      });
    } else {
      console.warn('Elemento form não encontrado');
    }
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  toggleButton() {
    this.disabled = this.listSelectedCourses.length === 0;
  }

  excluirTudo() {
    this.checkoutService.totalPrice = 0;
    this.totalPrice = 0;
    this.checkoutService.listSelectdCourse = [];
    this.listSelectedCourses = [];
    this.toggleButton();
  }

  excluir(course: Course, card: HTMLElement): void {
    this.totalPrice -= course.price;
    this.checkoutService.setCourse(course);
    this.checkoutService.unselectCourse2();
    if (this.totalPrice <= 0) {
      this.excluirTudo();
    }
    this.excluirtemplate(card);
    this.atualizarCursos();
  }

  atualizarCursos(): void {
    this.totalPrice = this.checkoutService.totalPrice;
    this.listSelectedCourses = this.checkoutService.listSelectdCourse;
  }

  excluirtemplate(card: HTMLElement): void {
    card.classList.add('hidden');
  }
}
