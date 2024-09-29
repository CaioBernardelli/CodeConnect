import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Notification } from '../../model/notificaton';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]); // Estado interno de notificações
  public notifications$ = this.notificationsSubject.asObservable(); // Observable para outros componentes se inscreverem
  private baseUrl: string = "http://localhost:8080/notification"; // Endpoint da API para notificações

  constructor(private httpClient: HttpClient) {}

  // Lista todas as notificações do servidor e atualiza o BehaviorSubject
  listar(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.baseUrl).pipe(
      tap((notifications: Notification[]) => {
        this.notificationsSubject.next(notifications); // Atualiza o BehaviorSubject com os dados recebidos
      }),
      catchError(this.handleError) // Adiciona tratamento de erro
    );
  }

  // Retorna o Observable que contém as notificações atuais
  getNotifications(): Observable<Notification[]> {
    return this.notifications$;
  }

  // Método para tratar erros e evitar que o Observable seja quebrado em caso de falhas
  private handleError(error: any): Observable<never> {
    console.error('Erro ao obter notificações:', error); // Log do erro
    return throwError(() => new Error('Erro ao carregar notificações, tente novamente mais tarde.')); // Retorna um erro amigável
  }
}
