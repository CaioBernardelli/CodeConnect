import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFirestoreService } from '../services/usuario-firestore.service'; 
import {firebaseConfig} from "../../app/firestore.config";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ]
})
export class FirestoreModule { }
