import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [CommonModule, MatIconModule, MatListModule, MatSidenavModule, RouterModule],
})
export class NavComponent {
  isAdmin: boolean = false;

  constructor(public usuarioService: UsuarioFirestoreService, private router: Router) {
    this.verificarAdmin();
  }

  verificarAdmin() {
    this.isAdmin = this.usuarioService.isAdmin(); // Verifica se o usuário é admin
  }

  link() {
    this.router.navigate(['/caio']);
  }
}
