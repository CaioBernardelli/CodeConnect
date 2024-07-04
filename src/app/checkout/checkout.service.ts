import { Injectable } from '@angular/core';
import { Course } from '../list-films/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = "http://localhost:3000"; // Inicializando corretamente
  public listCurse: Course[] = [];
  public totalPrice: number = 0;
  private _priceHandler: number = 0;
  public listSelectdCurse: Course[] = []
  constructor(private httpClient: HttpClient) { }


  getPrice(): number {
    return this._priceHandler;

  }

  setPrice(value: number) {
    this._priceHandler = value;
  }

  private _courseHander !: Course;

  getCourse(): Course {
    return this._courseHander;

  }

  selcourses(value: Course) {
    this._courseHander = value;

  }

  getListCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl + '/courses')
  }

  selectCourse() {
    setTimeout(() => {
      this._priceHandler += this.getPrice();
      console.log(this.totalPrice)

    }, 1);
    this._priceHandler += this.getPrice();
    console.log(this.totalPrice)
  }


  unselectCourse() {
    this._priceHandler -= this.getPrice();
    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }
    console.log(`Total price after unselecting: ${this.totalPrice}`);

  }



}
