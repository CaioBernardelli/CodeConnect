import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cadastrousuario',
  standalone: true,
  imports: [RouterModule, AppRoutingModule,CommonModule,FormsModule],
  templateUrl: './cadastrousuario.component.html',
  styleUrl: './cadastrousuario.component.scss'
})
export class CadastrousuarioComponent {

}
