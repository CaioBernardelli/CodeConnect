import { Injectable } from '@angular/core';
import { Course } from '../../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, switchMap } from 'rxjs';
import { NotificationService } from './notification.service';  // Importe o serviço de notificação
import { generateUniqueId } from '../../Util/id-generator';
import { UsuarioFirestoreService } from '../usuario-firestore.service'; // Exemplo


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = "http://localhost:3000/courses";
  public listCurse: Course[] = [];
  public totalPrice: number = 0;
  private _priceHandler: number = 0;
  public listSelectdCourse: Course[] = [];

  constructor(private httpClient: HttpClient, private notificationService: NotificationService,
    private usuarioService: UsuarioFirestoreService ) {}  // Injete o serviço de notificação



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

  getCourseById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.baseUrl}/${id}`);
  }

  private _courseHander !: Course;


  getListCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl)
  }
// nao usado
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

//nao usado
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
    return this.httpClient.put<Course>(`${this.baseUrl}/${course.id}`, course).pipe(
      tap(() => {
        // Notifica os administradores sobre a atualização de um curso
        const notification = {
          message: `Curso atualizado: ${course.name}`,
          date: new Date().toISOString(),
          type: 'admin', // Certifique-se de que o campo seja 'type' ao invés de 'tipo', para consistência
        };
        this.httpClient.post('http://localhost:8080/notification', notification).subscribe();
      })
    );
  }
  

  deleteCourse(id: string): Observable<void> {
    // Primeiro, obtemos o curso pelo ID antes de deletá-lo
    return this.getCourseById(id).pipe(
      switchMap((course: Course) => {
        // Após obter o curso, excluímos o curso
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(
          tap(() => {
            // Notificação após a remoção do curso
            const notification = {
              message: `Curso removido: ${course.name}`, // Agora usamos o nome do curso removido
              date: new Date().toISOString(),
              type: 'admin',
            };
            this.httpClient.post('http://localhost:8080/notification', notification).subscribe();
          })
        );
      })
    );
  }

  
  
  


  addCourse(course: Course): Observable<Course> {
    const newCourse = { ...course, id: generateUniqueId() };

    return this.httpClient.post<Course>(this.baseUrl, newCourse).pipe(
        tap(() => {
            // Aqui, ao invés de listar, você deveria enviar a notificação
            const notification = {
                message: `Novo curso adicionado: ${course.name}`,
                date: new Date().toISOString(),
                type: 'admin',
            };
            this.httpClient.post('http://localhost:8080/notification', notification).subscribe();
        })
    );
}

private getUserKey(): string {
  // Se não tiver user logado, usar algo como "guest" 
  // ou ID fixo para não quebrar a lógica
  let userId = 'guest';
  if (this.usuarioService.usuarioLogado) {
    userId = this.usuarioService.usuarioLogado.email || this.usuarioService.usuarioLogado.id;
  }
  return userId;
}

private getCartKey(): string {
  return 'cart_' + this.getUserKey();
}

private getPurchasedKey(): string {
  return 'purchased_' + this.getUserKey();
}

private carregarCarrinho() {
  const savedCart = localStorage.getItem(this.getCartKey());
  if (savedCart) {
    this.listSelectdCourse = JSON.parse(savedCart);
    this.totalPrice = this.listSelectdCourse.reduce((sum, course) => sum + course.price, 0);
  }
}

private salvarCarrinho() {
  localStorage.setItem(this.getCartKey(), JSON.stringify(this.listSelectdCourse));
}

addToCart(course: Course) {
  if (!this.listSelectdCourse.find(c => c.id === course.id)) {
    this.listSelectdCourse.push(course);
    this.totalPrice += course.price;
    this.salvarCarrinho();
  }
}

removeFromCart(course: Course) {
  this.listSelectdCourse = this.listSelectdCourse.filter(c => c.id !== course.id);
  this.totalPrice = this.listSelectdCourse.reduce((sum, c) => sum + c.price, 0);
  this.salvarCarrinho();
}

clearCart() {
  this.listSelectdCourse = [];
  this.totalPrice = 0;
  localStorage.removeItem(this.getCartKey());
}

comprarCurso(course: Course) {
  // "cursoAdquiridoKey" baseado no usuário
  let key = this.getPurchasedKey();
  let cursosAdquiridos = JSON.parse(localStorage.getItem(key) || '[]');

  if (!cursosAdquiridos.some((c: Course) => c.id === course.id)) {
    cursosAdquiridos.push(course);
    localStorage.setItem(key, JSON.stringify(cursosAdquiridos));
  }

  this.clearCart();
}


}
