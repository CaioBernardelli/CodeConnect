import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string = "http://localhost:3000/usuarios";
  private usuarioLogado: Usuario | null = null;//

  // Adicione o BehaviorSubject para monitorar o usuário logado
  private usuarioLogadoSubject = new BehaviorSubject<Usuario | null>(null);//
  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();//

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.baseUrl);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.validarEmailsDiferentes(usuario).pipe(
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
      throw new Error('Usuário não pode ser menor de idade!');
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

  autenticar(email: string, senha: string): Observable<Usuario> {
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}?email=${email}&senha=${senha}`).pipe(
      map(usuarios => {
        if (usuarios.length === 0 || usuarios[0].senha !== senha) {
          throw new Error('Email ou senha incorretos');
        }
        this.usuarioLogado = usuarios[0];
        this.usuarioLogadoSubject.next(this.usuarioLogado); // Atualiza o BehaviorSubject
        console.log('Usuário autenticado:', this.usuarioLogado); // Verifique se o usuário correto está sendo autenticado
        return usuarios[0];
      }),
      catchError(error => {
        return throwError(() => new Error(error.message));
      })
    );
  }


  getUsuarioLogado(): Usuario | null {
    return this.usuarioLogado;
  }

  logout(): void {
    this.usuarioLogado = null;
    this.usuarioLogadoSubject.next(null); // Atualiza o BehaviorSubject
  }

  // Método que retorna o Observable do BehaviorSubject
  getUsuarioLogadoObservable(): Observable<Usuario | null> {
    return this.usuarioLogado$;
  }

  remover(id: string): Observable<void> {
    console.log(`Removendo usuário com ID: ${id}`); // Adicione este log para verificar o ID
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        console.error(`Erro ao remover usuário com ID: ${id}`, error);
        return throwError(() => new Error(error.message));
      })
    );
  }



  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.baseUrl}/${usuario.id}`, usuario).pipe( // Troquei `email` por `id`
      catchError((error) => {
        return throwError(() => new Error(error.message));
      })
    );
  }




}
