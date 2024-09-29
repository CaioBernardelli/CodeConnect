import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notification } from '../../model/notificaton';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();
  public baseUrl: string = "http://localhost:8080/notification"; // Corrigido

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.baseUrl).pipe(
      tap((notifications: Notification[]) => {
        this.notificationsSubject.next(notifications); // Atualiza o BehaviorSubject com os dados recebidos
      })
    );
  }

  getNotifications(): Observable<Notification[]> {
    return this.notifications$;
  }
}
