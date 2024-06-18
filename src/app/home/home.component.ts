import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, BrowserAnimationsModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses = [
    { title: 'Introdução ao Excel', img: 'assets\img\catalogocursos-removebg-preview.png' },
    // mais cursos
  ];

}
