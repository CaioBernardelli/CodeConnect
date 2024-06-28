import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  public courses = [
    { title: 'Introdução ao Excel', subtitle: 'Aprenda Excel do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Word', subtitle: 'Aprenda Word do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao PowerPoint', subtitle: 'Aprenda PowerPoint do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Caio', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png'},
    { title: 'Introdução ao Access', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Brunna', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Caarla', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao neto', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao alberto', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', price: 'Grátis', img: 'assets/img/catalogocursos-removebg-preview.png' }
  ];

  ngAfterViewInit() {
    new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
  }
}
