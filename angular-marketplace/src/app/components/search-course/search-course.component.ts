import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../model/course.model'; // Verifique se o caminho do seu modelo está correto

import { MatCardModule } from '@angular/material/card';
import { SelectButtonComponent } from '../select-button/select-button.component';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient para fazer requisições HTTP
import { FormsModule } from '@angular/forms';
import { CheckoutService } from '../../services/checkout/checkout.service';

@Component({
  standalone: true,
  imports: [MatCardModule, CommonModule, SelectButtonComponent, FormsModule],
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
  listCourses: Course[] = []; // Renomeei para listCourses, ajuste conforme necessário
  filteredCourses: Course[] = [];
  searchText: string = '';

  constructor(
    private checkoutService: CheckoutService,
    private http: HttpClient // Injete o HttpClient no construtor
  ) { }

  ngOnInit(): void {
    // Simule uma requisição HTTP para obter os cursos
    this.http.get<Course[]>('/api/courses').subscribe(courses => {
      this.listCourses = courses;
      this.filteredCourses = courses; // Inicialmente, exibe todos os cursos
    });
  }

  filterCourses(): void {
    this.filteredCourses = this.listCourses.filter(course =>
      course.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  selectCourse(course: Course): void {
    // Lógica para selecionar um curso, ajuste conforme necessário
    this.checkoutService.setPrice(course.price);
  }
}
