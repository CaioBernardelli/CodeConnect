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
  private usuarioLogadoSubject = new BehaviorSubject<Usuario | null>(null);// mantém o valor atual e o emite a novos assinantes.
  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();//Um BehaviorSubject para monitorar o usuário logado e permitir a atualização de forma reativa.

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


  // Validações Inserir 
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

        // Se o usuário estiiver logado
        this.usuarioLogado = usuarios[0]; // atribua o usuário retornado a o logado
        this.usuarioLogadoSubject.next(this.usuarioLogado); // Atualiza o BehaviorSubject
        return usuarios[0];
      }),
      catchError(error => {
        return throwError(() => new Error(error.message));
      })
    );
  }


  remover(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
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

//
  isAdmin(): Observable<boolean> {  // vai fazer a 
    return this.usuarioLogado$.pipe(
      map(usuario => usuario?.email === 'admin@example.com')
    );
  }

//
  getUsuarioLogado(): Usuario | null {//Pode ser usado quando você deseja acessar diretamente o valor do usuário logado sem se inscrever em um Observable.
    return this.usuarioLogado;        // Para proxima entrega
  }

  logout(): void {
    this.usuarioLogado = null;            // Para proxima entrega 
    this.usuarioLogadoSubject.next(null); // Atualiza o BehaviorSubject
    // Define o usuário logado como null e notifica todos os assinantes do BehaviorSubject que o usuário foi desconectado.
  }
//Retorna o Observable do BehaviorSubject para que outros componentes possam se inscrever e reagir a mudanças no usuário logado.
  getUsuarioLogadoObservable(): Observable<Usuario | null> {     //Permite a reatividade em componentes 
    return this.usuarioLogado$;
  }

 



}
