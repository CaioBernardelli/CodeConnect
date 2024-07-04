import { Component, OnInit } from '@angular/core';
import { CardFilmComponent } from '../card-film/card-film.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CheckoutService } from '../checkout/checkout.service';
import { Course } from './film.model';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
    selector: 'app-list-films',
    standalone: true,
    templateUrl: './list-films.component.html',
    styleUrl: './list-films.component.scss',
    imports: [CardFilmComponent, RouterModule, MatCardModule, CarouselComponent]
})
export class ListFilmsComponent implements OnInit {
    listCourses: Course[] = [];
    constructor(private checkoutService: CheckoutService) { }
    ngOnInit(): void {
        this.checkoutService.getListCourse().subscribe((course) => {
            this.listCourses = course;

        })
    }

}
