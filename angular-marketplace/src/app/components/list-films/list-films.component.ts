import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../../model/course.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SelectButtonComponent } from '../select-button/select-button.component';
import { MatIconModule } from '@angular/material/icon';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-films',
    standalone: true,
    templateUrl: './list-films.component.html',
    styleUrl: './list-films.component.scss',
    imports: [MatIconModule, SelectButtonComponent, CommonModule, FormsModule, MatFormFieldModule, RouterModule, MatCardModule]
})
export class ListFilmsComponent implements OnInit {
    listCourses: Course[] = [];
    filteredCourses: Course[] = [];
    searchText: string = '';
    shouldShowCardFilm: boolean = true;


    constructor( private router: Router,private checkoutService: CheckoutService) { }


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

    carrinho() {
        this.router.navigate(['/carrinho']); // Redireciona para a página de adicionar curso
      }



      selectCourse(course: Course): void {
        
        this.checkoutService.setPrice(course.price)
        this.checkoutService.setCourse(course)
        console.log(course)



      }
}
