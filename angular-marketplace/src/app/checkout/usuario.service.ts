import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from '../model/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string = "http://localhost:3000/usuarios";  // Inicializando corretamente

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.baseUrl);
  }


  inserir(usuario: Usuario): Observable<Usuario> {
    this.validarMaiorIdade(usuario);
    return this.httpClient.post<Usuario>(this.baseUrl, usuario);
  }

  private validarMaiorIdade(usuario: Usuario) {
    if (usuario.idade < 18) {
        throw new Error('Usuário nao pode ser menor!');
    }
}

   private validarEmail(){

   }
 

}
