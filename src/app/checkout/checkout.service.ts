import { Injectable } from '@angular/core';
import { Film } from '../list-films/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = "http://localhost:3000"; // Inicializando corretamente
  public listFilms: Film[] = [];
  public totalPrice: number = 0;
  private _priceHandler: number = 0;
  public listSelectdFilms: Film[] = []
  constructor(private httpClient: HttpClient ) { }


  getPrice(): number {
    return this._priceHandler;

  }

  setPrice(value: number) {
    this._priceHandler = value;
  }

  private _filmHander !: Film;

  getFilm() : Film{
    return this._filmHander;

  }

  selfilm(value: Film) {
    this._filmHander = value;
 
  }

  getListFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]> (this.baseUrl+'/films')
  }

  selectFilm(){
    setTimeout(() => {
      this._priceHandler += this.getPrice();
      console.log(this.totalPrice)

    }, 1);
    this._priceHandler += this.getPrice();
    console.log(this.totalPrice)
  }


  unselectFilm(){
    this._priceHandler -= this.getPrice();
    if(this.totalPrice < 0){
      this.totalPrice = 0;
    }
    console.log(`Total price after unselecting: ${this.totalPrice}`);

  }



}
