import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../list-films/course.model';
import { CheckoutService } from '../checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { SelectButtonComponent } from '../select-button/select-button.component';
;
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-card-course',
  standalone: true,
  imports: [CommonModule, MatCardModule, SelectButtonComponent, MatFormFieldModule],
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {
  @Input() courses: Course[] = [];
  listCourses: Course[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListCourse().subscribe((courses: Course[]) => {
      this.listCourses = courses;
    });
  }

  selectCourse(course: Course): void {
    this.checkoutService.setPrice(course.price);
  }
}
