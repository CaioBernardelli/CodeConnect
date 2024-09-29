import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioFirestoreService } from '../services/usuario-firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private usuarioFirestoreService: UsuarioFirestoreService, private router: Router) { }

  canActivate(): boolean {
    if (this.usuarioFirestoreService.isAdmin()) {
      return true;  // Usuário é admin, pode acessar
    }

    // Redireciona para outra página se o usuário não for admin
    this.router.navigate(['/courses-carousel']);
    return false;
  }
}
