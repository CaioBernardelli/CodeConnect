import { Component } from '@angular/core';
import {MatButtonModule} from  '@angular/material/button';
import {MatButtonToggleModule} from  '@angular/material/button-toggle';
import { CheckoutService } from '../checkout/checkout.service';
@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [MatButtonModule,MatButtonToggleModule],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent {
   disabled = false;
  constructor(private checkoutService: CheckoutService) {
    // Inicializa a propriedade disabled de acordo com alguma lógica, se necessário
   
  }

  selectCurse() {
    this.disabled = true; // Ajusta o estado do botão se necessário
    this.checkoutService.selectCurse();
    
  }

  unselectCurse() {
    this.disabled = false; // Ajusta o estado do botão se necessário
    this.checkoutService.unselectCurse();
   
  }
}

