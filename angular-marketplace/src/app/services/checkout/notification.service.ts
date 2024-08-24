import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../model/notificaton';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public baseUrl: string = "http://localhost:3000/notifications";

  constructor(private httpClient: HttpClient) {
   }
   listar(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.baseUrl);
  }
}
