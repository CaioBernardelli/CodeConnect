import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Swiper, type SwiperModule } from 'swiper/types';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  public courses = [
    { title: 'Introdução ao Excel', subtitle: 'Aprenda Excel do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Word', subtitle: 'Aprenda Word do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao PowerPoint', subtitle: 'Aprenda PowerPoint do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Access', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' }
  ];

  public coursespag = [
    { title: 'Introdução ao Excel', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Canvas', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Excel', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Excel', img: 'assets/img/catalogocursos-removebg-preview.png' }
    // mais cursos
  ];

  currentIndexFree = 0;
  currentIndexPaid = 0;
  displayCount = 1;  // Número de itens a serem exibidos ao mesmo tempo

  onPreviousClickFree(): void {
    this.currentIndexFree = (this.currentIndexFree - 1 + this.courses.length) % this.courses.length;
  }

  onNextClickFree(): void {
    this.currentIndexFree = (this.currentIndexFree + 1) % this.courses.length;
  }

  onPreviousClickPaid(): void {
    this.currentIndexPaid = (this.currentIndexPaid - 1 + this.coursespag.length) % this.coursespag.length;
  }

  onNextClickPaid(): void {
    this.currentIndexPaid = (this.currentIndexPaid + 1) % this.coursespag.length;
  }
}
