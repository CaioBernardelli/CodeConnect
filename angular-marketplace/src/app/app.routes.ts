import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CadastrousuarioComponent } from './cadastrousuario/cadastrousuario.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-films', component: ListFilmsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cadastro-usuario', component: CadastrousuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
