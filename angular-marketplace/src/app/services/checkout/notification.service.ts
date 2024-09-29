import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notification } from '../../model/notificaton';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();
  public baseUrl: string = "http://localhost:8080/notifications";

  constructor(private httpClient: HttpClient) {
   }
   listar(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.baseUrl);
  }
  getNotifications(): Observable<Notification[]> {
    return this.notifications$;
  }
}
