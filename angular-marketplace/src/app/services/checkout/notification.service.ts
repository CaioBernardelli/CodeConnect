import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Notification } from '../../model/notificaton';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();
  private baseUrl: string = "http://localhost:8080/notification"; 

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.baseUrl).pipe(
      tap((notifications: Notification[]) => {
        this.notificationsSubject.next(notifications);
      }),
      catchError(this.handleError)
    );
  }

  listarPorTipo(tipo: string): Observable<Notification[]> {
    const url = `${this.baseUrl}/tipo/${tipo}`; // Monta a URL para filtrar por tipo
    return this.httpClient.get<Notification[]>(url).pipe(
      tap((notifications: Notification[]) => {
        this.notificationsSubject.next(notifications);
      }),
      catchError(this.handleError)
    );
  }
  

  getNotifications(): Observable<Notification[]> {
    return this.notifications$;
  }

  private handleError(error: any): Observable<never> {
    console.error('Erro ao obter notificações:', error);
    return throwError(() => new Error('Erro ao carregar notificações, tente novamente mais tarde.'));
  }
}
