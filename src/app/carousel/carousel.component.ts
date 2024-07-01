
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css'; // Import only the necessary CSS
import 'swiper/css/navigation'; // Import navigation styles
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  public courses = [
      { title: 'Introdução ao Excel', subtitle: 'Aprenda Excel do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
        { title: 'Introdução ao Word', subtitle: 'Aprenda Word do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
        { title: 'Introdução ao PowerPoint', subtitle: 'Aprenda PowerPoint do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
        { title: 'Introdução ao Caio', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
        { title: 'Introdução ao Access', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
        { title: 'Introdução ao Brunna', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
        { title: 'Introdução ao Caarla', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
        { title: 'Introdução ao neto', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
        { title: 'Introdução ao alberto', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' }
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


}