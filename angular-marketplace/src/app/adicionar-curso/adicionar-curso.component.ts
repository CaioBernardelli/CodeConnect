import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from '../services/checkout/checkout.service';
import { Course } from '../model/course.model';
import { FormsModule } from '@angular/forms'; // Importar FormsModule


@Component({
  selector: 'app-adicionar-curso',
  standalone: true,
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.scss'],
  imports: [FormsModule] // Adicionar FormsModule aqui
})
export class AdicionarCursoComponent {
  curso: Course = new Course(0, '', '', '', 0);

  constructor(private cursoService: CheckoutService, private router: Router) { }

  adicionarCurso() {
    this.cursoService.addCourse(this.curso).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }
}
