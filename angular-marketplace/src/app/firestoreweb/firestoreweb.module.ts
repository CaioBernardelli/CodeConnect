import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreModule } from '@angular/fire/firestore'; // Use FirestoreModule agora
import {firebaseConfig} from "../../../firestore.config";
import {AngularFireModule} from "@angular/fire/compat";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      AngularFireModule.initializeApp(firebaseConfig)
  ]
})

export class FirestorewebModule { }
