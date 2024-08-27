import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { UsuarioService } from '../../services/checkout/usuario.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [CommonModule, MatIconModule, MatListModule, MatSidenavModule, RouterModule] // Adicione o CommonModule aqui
})
export class NavComponent {
  isAdmin: boolean = false;

  constructor(public usuarioService: UsuarioService) {
    this.usuarioService.getUsuarioLogadoObservable().subscribe((usuario) => {
      this.isAdmin = usuario?.email === 'admin@example.com';
    });
  }
}
