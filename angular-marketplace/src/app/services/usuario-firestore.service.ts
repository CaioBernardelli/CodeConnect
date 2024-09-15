import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {
  private collectionName: string = 'usuarios'; 

  constructor(private firestore: Firestore) {}

  listar(): Observable<Usuario[]> {
    const usuariosCollection = collection(this.firestore, this.collectionName);
    return collectionData(usuariosCollection, { idField: 'id' }) as Observable<Usuario[]>;
  }

  inserir(usuario: Usuario): Promise<void> {
    
    const { id, ...usuarioSemId } = usuario;
    const usuariosCollection = collection(this.firestore, this.collectionName); // Referência à coleção 'usuarios'
    return addDoc(usuariosCollection, usuarioSemId) // Adiciona um novo documento com os dados do usuário
      .then(() => {
        console.log("Usuário adicionado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao adicionar usuário: ", error);
      });

    
  }
}
