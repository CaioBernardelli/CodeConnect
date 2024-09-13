import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {
  colecaoUsuarios!: AngularFirestoreCollection<Usuario>;
  private collectionName: string = 'usuarios'; 

  constructor(private firestore : AngularFirestore) { 
    this.colecaoUsuarios = firestore.collection(this.collectionName);
  }

  listar(): Observable<Usuario[]> {
    return this.colecaoUsuarios.valueChanges({idField: 'id'})
  }
}
