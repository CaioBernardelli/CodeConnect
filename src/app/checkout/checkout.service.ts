import { Injectable } from '@angular/core';
import { Curse } from '../list-films/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = "http://localhost:3000"; // Inicializando corretamente
  public listCurse: Curse[] = [];
  public totalPrice: number = 0;
  private _priceHandler: number = 0;
  public listSelectdCurse: Curse[] = []
  constructor(private httpClient: HttpClient) { }


  getPrice(): number {
    return this._priceHandler;

  }

  setPrice(value: number) {
    this._priceHandler = value;
  }

  private _curseHander !: Curse;

  getCurse(): Curse {
    return this._curseHander;

  }

  selcurse(value: Curse) {
    this._curseHander = value;

  }

  getListCurse(): Observable<Curse[]> {
    return this.httpClient.get<Curse[]>(this.baseUrl + '/courses')
  }

  selectCurse() {
    setTimeout(() => {
      this._priceHandler += this.getPrice();
      console.log(this.totalPrice)

    }, 1);
    this._priceHandler += this.getPrice();
    console.log(this.totalPrice)
  }


  unselectCurse() {
    this._priceHandler -= this.getPrice();
    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }
    console.log(`Total price after unselecting: ${this.totalPrice}`);

  }



}
