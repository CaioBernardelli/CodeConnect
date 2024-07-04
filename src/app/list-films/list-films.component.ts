import { Component, OnInit } from '@angular/core';
import { CardFilmComponent } from '../card-film/card-film.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CheckoutService } from '../checkout/checkout.service';
import { Course } from './film.model';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SelectButtonComponent } from '../select-button/select-button.component';
@Component({
    selector: 'app-list-films',
    standalone: true,
    templateUrl: './list-films.component.html',
    styleUrl: './list-films.component.scss',
    imports: [SelectButtonComponent,CommonModule,FormsModule,MatFormFieldModule,CardFilmComponent, RouterModule, MatCardModule, CarouselComponent]
})
export class ListFilmsComponent implements OnInit {
    listCourses: Course[] = [];
    filteredCourses: Course[] = [];
    searchText: string = '';
    shouldShowCardFilm: boolean = true;

   
    constructor(private checkoutService: CheckoutService) { }
    
    
    ngOnInit(): void {
        this.checkoutService.getListCourse().subscribe((course) => {
            this.listCourses = course;
            this.filteredCourses = course;

        })
    }

    filterCourses(): void {
        if (this.searchText) {
            this.filteredCourses = this.listCourses.filter(course => course.name.toLowerCase().includes(this.searchText.toLowerCase()));
        } else {
            this.filteredCourses = this.listCourses;
        }
    }


    onButtonClick() {
        console.log('Valor do input:', this.searchText);
        this.filterCourses();
        // Adicione qualquer lógica adicional aqui
      }

      selectCourse(course: Course): void {
        this.checkoutService.setPrice(course.price);
      }//tirado do card-film 
    }
