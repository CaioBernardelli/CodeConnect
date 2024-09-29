import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioFirestoreService } from '../services/usuario-firestore.service'; // Ou o serviço que você estiver usando

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private usuarioService: UsuarioFirestoreService, 
    private router: Router
  ) {}

  canActivate(): boolean {
    const user = this.usuarioService.usuarioLogado; // Verifica se o usuário está logado

    if (user) {
      return true;
    }

    this.router.navigate(['/home']); // Redireciona para a página inicial se não estiver logado
    return false;
  }
}
