import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../list-films/film.model';
import { CheckoutService } from '../checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { SelectButtonComponent } from '../select-button/select-button.component';
import {} from '@angular/common/http';


@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [CommonModule, MatCardModule, SelectButtonComponent],
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent implements OnInit {
  listCourses: Course[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListCourse().subscribe((courses: Course[]) => {
      this.listCourses = courses;
    });
  }

  selectCurse(course: Course): void {
    this.checkoutService.setPrice(course.price);
  }
}
