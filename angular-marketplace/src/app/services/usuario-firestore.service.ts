import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, where, query, getDocs, doc, deleteDoc } from '@angular/fire/firestore';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root',
})
export class UsuarioFirestoreService {
  private collectionName: string = 'usuarios';
  public usuarioLogado: Usuario | null = null;

  constructor(private firestore: Firestore) {
    // Tenta carregar o usuário do localStorage ao inicializar
    const usuarioString = localStorage.getItem('usuarioLogado');
    if (usuarioString) {
      this.usuarioLogado = JSON.parse(usuarioString);
    }
  }

  isAdmin(): boolean {
    return this.usuarioLogado?.email === 'admin@example.com';
  }

  autenticar(email: string, senha: string): Observable<Usuario> {
    const usuariosCollection = collection(this.firestore, this.collectionName);
    const q = query(usuariosCollection, where('email', '==', email), where('senha', '==', senha));

    return new Observable<Usuario>((observer) => {
      getDocs(q)
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            throw new Error('Email ou senha incorretos');
          } else {
            const usuario = querySnapshot.docs[0].data() as Usuario;
            this.usuarioLogado = usuario;

            // Armazena o usuário logado no localStorage
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

            observer.next(usuario);
            observer.complete();
          }
        })
        .catch((error) => {
          observer.error(new Error(error.message));
        });
    });
  }

  logout() {
    this.usuarioLogado = null;
    localStorage.removeItem('usuarioLogado'); // Remove o usuário do localStorage ao deslogar
  }


  

  listar(): Observable<Usuario[]> {
    const usuariosCollection = collection(this.firestore, this.collectionName);
    return collectionData(usuariosCollection, { idField: 'id' }) as Observable<Usuario[]>;
  }
  async remover(id: string): Promise<void> {
    const usuarioDoc = doc(this.firestore, `${this.collectionName}/${id}`);  // Referência ao documento pelo ID
    return deleteDoc(usuarioDoc).then(() => {
      console.log('Usuário removido com sucesso!');
    }).catch(error => {
      console.error('Erro ao remover usuário:', error);
      throw new Error('Erro ao remover o usuário!');
    });
  }


  
  

  async inserir(usuario: Usuario): Promise<void> {
    await this.validarEmailsDiferentes(usuario.email);
    this.validarEmail(usuario.email) 
    this.validarMaiorIdade(usuario);
    const { id, ...usuarioSemId } = usuario;
    const usuariosCollection = collection(this.firestore, this.collectionName);
    return addDoc(usuariosCollection, usuarioSemId).then(() => {
 
    });
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
  
   async validarEmailsDiferentes(email: string): Promise<void> {
    const usuariosCollection = collection(this.firestore, this.collectionName);
    const q = query(usuariosCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      throw new Error('Usuário já cadastrado com o mesmo endereço de email!');
    }
  }



}



