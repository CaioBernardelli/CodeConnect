import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { Course } from '../../model/course.model';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [MatButtonModule, MatButtonToggleModule],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent {
  @Input() course!: Course; // Recebe o curso do componente pai
  disabled = false;
  constructor(private checkoutService: CheckoutService) {
    // Inicializa a propriedade disabled de acordo com alguma lógica, se necessário

  }

  selectCurse() {
    this.disabled = true; // Ajusta o estado do botão se necessário
   // this.checkoutService.selectCourse(this.course,this.course.price);
   this.checkoutService.selectCourse1();


  }

  unselectCurse() {
    this.disabled = false; // Ajusta o estado do botão se necessário
 //   this.checkoutService.unselectCourse(this.course,this.course.price);
 this.checkoutService.unselectCourse2();
  }
}

