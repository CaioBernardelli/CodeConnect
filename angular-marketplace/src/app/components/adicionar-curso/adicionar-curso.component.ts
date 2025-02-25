import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../model/course.model';
import { FormsModule } from '@angular/forms';
import { CheckoutService } from '../../services/checkout/checkout.service';

// IMPORTS DO ANGULAR E MATERIAL
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-adicionar-curso',
  standalone: true,
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.scss'],
  imports: [
    // Todos os módulos usados no template precisam entrar aqui
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdicionarCursoComponent {
  curso: Course = new Course("", '', '', '', 0);
  showStepByStep = true;

  constructor(private cursoService: CheckoutService, private router: Router) { }

  adicionarCurso() {
    this.cursoService.addCourse(this.curso).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }
}


