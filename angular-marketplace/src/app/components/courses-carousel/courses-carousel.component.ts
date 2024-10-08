import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { NotificationListComponent } from "../notification-list/notification-list.component";
@Component({
  selector: 'app-courses-carousel',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, CarouselComponent, FooterComponent],
  templateUrl: './courses-carousel.component.html',
  styleUrl: './courses-carousel.component.scss'
})
export class CoursesCarouselComponent {
  public courses: any[] = [
    { title: 'Introdução ao Excel', subtitle: 'Aprenda Excel do zero', description: 'Curso completo para iniciantes.', paid: false, img: 'assets/img/AEsf7a6J2NEbmqX30vSFIF4INQVpAY80zZN7paS4-550x550-resized.png' },
    { title: 'Introdução ao Word', subtitle: 'Aprenda Word do zero', description: 'Curso completo para iniciantes.', paid: false, img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao PowerPoint', subtitle: 'Aprenda PowerPoint do zero', description: 'Curso completo para iniciantes.', paid: false, img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Access', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', paid: false, img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Access', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', paid: false, img: 'assets/img/catalogocursos-removebg-preview.png' },
    { title: 'Introdução ao Access', subtitle: 'Aprenda Access do zero', description: 'Curso completo para iniciantes.', paid: false, img: 'assets/img/catalogocursos-removebg-preview.png' }
  ];

  public coursespag: any[] = [
    { title: 'Introdução ao Excel', subtitle: 'Aprenda Excel do zero', img: 'assets/img/catalogocursos-removebg-preview.png', paid: true, price: '9,99' },
    { title: 'Introdução ao carro', subtitle: 'Aprenda a dirigir do zero', img: 'assets/img/catalogocursos-removebg-preview.png', paid: true, price: '9,99' },
    { title: 'Introdução ao Excel', subtitle: 'Aprenda Excel do zero', img: 'assets/img/catalogocursos-removebg-preview.png', paid: true, price: '9,99' },
    { title: 'Introdução ao Canvas', subtitle: 'Aprenda a usar o Canvas', img: 'assets/img/catalogocursos-removebg-preview.png', paid: true, price: '9,99' },
    { title: 'Introdução ao Excel', subtitle: 'Aprenda Excel do zero', img: 'assets/img/catalogocursos-removebg-preview.png', paid: true, price: '9,99' },
    { title: 'Introdução ao Excel', subtitle: 'Aprenda Excel do zero', img: 'assets/img/catalogocursos-removebg-preview.png', paid: true, price: '9,99' },
  ];


  currentIndexFree = 0;
  currentIndexPaid = 0;
  displayCount = 5;  // Número de itens a serem exibidos ao mesmo tempo
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
