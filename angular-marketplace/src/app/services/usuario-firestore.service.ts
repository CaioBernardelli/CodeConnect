import { Injectable } from '@angular/core';
import {Usuario} from "../model/usuario";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  private collectionName = 'usuarios';

  constructor(private firestore: AngularFirestore) { }

  listar(): Observable<Usuario[]> {
    return this.firestore.collection<Usuario>(this.collectionName).valueChanges();
  }

  inserir(usuario: Usuario): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({ ...usuario, id });
  }

  remover(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

}