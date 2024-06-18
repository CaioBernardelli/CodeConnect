import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../list-films/film.model';
import { CheckoutService } from '../checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { SelectButtonComponent } from '../select-button/select-button.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [CommonModule, MatCardModule, SelectButtonComponent,HttpClientModule],
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent implements OnInit {
  listFilms: Film[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((films: Film[]) => {
      this.listFilms = films;
    });
  }

  selectFilm(film: Film): void {
    this.checkoutService.setPrice(film.price);
  }
}
