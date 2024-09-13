import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariofirebaseComponent } from '../components/usuariofirebase/usuariofirebase.component';
import {firebaseConfig} from "../../app/firestore.config";
import {AngularFireModule} from "@angular/fire/compat";




@NgModule({
  declarations: [UsuariofirebaseComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ]
})
export class FirestoreModule { }
