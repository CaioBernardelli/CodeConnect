import { Injectable } from '@angular/core';
import { Course } from '../../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { generateUniqueId } from '../../Util/id-generator';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = "http://localhost:3000/courses";
  public listCurse: Course[] = [];


  public totalPrice: number = 0;
  private _priceHandler: number = 0;
  public listSelectdCourse: Course[] = []


  constructor(private httpClient: HttpClient) { }


  getPrice(): number {
    return this._priceHandler;

  }

  setPrice(value: number): void {
    this._priceHandler = value;//  mudificado pelo metodo do list-cursos 

  }


  getCourse(): Course {
    return this._courseHander;

  }

  setCourse(value: Course): void {
    this._courseHander = value;

  }


  private _courseHander !: Course;








  getListCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl)
  }







  selectCourse(course: Course, price: number) {
    this.totalPrice += price;

    this.listSelectdCourse.push(course);
    console.log(`Total price after selecting: ${this.totalPrice}`);
    console.log(`Selected courses:`, this.listSelectdCourse.map(c => c.name)); // Exibe os nomes dos cursos selecionados
  }








  selectCourse1() {

    setTimeout(() => {

      this.totalPrice += this.getPrice();

      this.listSelectdCourse.push(this.getCourse())
      console.log(this.totalPrice);
      console.log(this.listSelectdCourse)
    }, 1);


  }


  unselectCourse2() {
    this.totalPrice -= this.getPrice();

    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }

    let index = this.listSelectdCourse.indexOf(this.getCourse());
    if (index > -1 || index === this.listSelectdCourse.indexOf(this.getCourse())) {
      this.listSelectdCourse.splice(index, 1)

    }

    console.log(this.totalPrice);
    console.log(this.listSelectdCourse)


  }


  unselectCourse(course: Course, price: number) {
    this.totalPrice -= price;

    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }

    const index = this.listSelectdCourse.findIndex(
      (selectedCourse) => selectedCourse.id === course.id
    );
    if (index > -1) {
      this.listSelectdCourse.splice(index, 1);
      this.listSelectdCourse = [...this.listSelectdCourse];
    }
    console.log(`Total price after unselecting: ${this.totalPrice}`);
    console.log(`UnSelected courses:`, this.listSelectdCourse.map(c => c.name)); // Exibe os nomes dos cursos selecionados
  }


  updateCourse(course: Course): Observable<Course> {
    return this.httpClient.put<Course>(`${this.baseUrl}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }


  addCourse(course: Course): Observable<Course> {
    // Gerar um novo ID para o curso
    const newCourse = { ...course, id: generateUniqueId() };
    return this.httpClient.post<Course>(this.baseUrl, newCourse);
  }





}
