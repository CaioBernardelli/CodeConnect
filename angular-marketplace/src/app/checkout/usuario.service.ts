import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, mergeMap, Observable, throwError } from "rxjs";
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
    return this.validarEmailsDiferentes(usuario).pipe(                   // A inserção não estava vendo o email e acabava inserindo o email , necessidade do pipe para localização desse sistema 
      mergeMap(() => {
        this.validarEmail(usuario.email);
        this.validarMaiorIdade(usuario);
        return this.httpClient.post<Usuario>(this.baseUrl, usuario);
      }),
      catchError((error) => {
        return throwError(() => new Error(error.message));
      })
    );
  }

  private validarMaiorIdade(usuario: Usuario) {
    if (usuario.idade < 18) {
        throw new Error('Usuário nao pode ser menor!');
    }
}

  private validarEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      throw new Error('Endereço de email inválido!');
  }
}



private validarEmailsDiferentes(usuario: Usuario): Observable<void> {
  return this.listar().pipe(
    map(usuarios => {
      const usuarioExistente = usuarios.find(u => u.email === usuario.email);
      if (usuarioExistente) {
        throw new Error('Usuário já cadastrado com o mesmo endereço!');
      }
    })
  );
}
}