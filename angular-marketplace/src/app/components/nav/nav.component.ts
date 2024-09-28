import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { UsuarioService } from '../../services/checkout/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [CommonModule, MatIconModule, MatListModule, MatSidenavModule, RouterModule] // Adicione o CommonModule aqui
})
export class NavComponent {
  isAdmin: boolean = false;

  constructor(public usuarioService: UsuarioService,private router: Router) {
    this.isAdmin = this.usuarioService.isAdmin();
   
   
    //this.usuarioService.isAdmin().subscribe(isAdmin => {
     // this.isAdmin = isAdmin;
 //   });
  }
  link() {
    this.router.navigate(['/caio']); 
  }

}
