import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Certifique-se de importar isso
import { Course } from '../list-films/course.model';
import { MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-cadastrousuario',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule,MatInputModule],
  templateUrl: './cadastrousuario.component.html',
  styleUrl: './cadastrousuario.component.scss'
})
export class CadastrousuarioComponent {
 courses: Course[] = [];

  constructor() {
 
  }

}
