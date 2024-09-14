import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {
  private collectionName: string = 'usuarios'; 

  constructor(private firestore: Firestore,private angularfirestore: AngularFirestore) {}

  listar(): Observable<Usuario[]> {
    const usuariosCollection = collection(this.firestore, this.collectionName);
    return collectionData(usuariosCollection, { idField: 'id' }) as Observable<Usuario[]>;
  }

  inserir(usuario: Usuario): Promise<void> {
    const id = this.angularfirestore.createId();
    return this.angularfirestore.collection(this.collectionName).doc(id).set({ ...usuario, id });
  }



}
