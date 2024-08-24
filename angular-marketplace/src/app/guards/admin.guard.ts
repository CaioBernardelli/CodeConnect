import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../services/checkout/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  canActivate(): boolean {
    const user = this.usuarioService.getUsuarioLogado();

    if (user && user.email === 'admin@example.com') { // Substitua pelo email do admin real
      return true;
    }

    this.router.navigate(['/login-in']);
    return false;
  }
}
