import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curse } from '../list-films/film.model';
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
  listCurses: Curse[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListCurse().subscribe((curses: Curse[]) => {
      this.listCurses = curses;
    });
  }

  selectCurse(curse: Curse): void {
    this.checkoutService.setPrice(curse.price);
  }
}
