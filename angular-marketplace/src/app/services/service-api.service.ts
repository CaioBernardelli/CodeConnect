import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  private apiUrl = 'https://remoteok.com/api'; // Substitua pela URL da API de vagas

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
