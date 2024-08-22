import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CadastrousuarioComponent } from './cadastrousuario/cadastrousuario.component';
import { LoginInComponent } from './login-in/login-in.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { LayoutComponent } from './layout/layout.component';
import { CoursesCarouselComponent } from './courses-carousel/courses-carousel.component';
import { AdicionarCursoComponent } from './adicionar-curso/adicionar-curso.component';

export const routes: Routes = [
   { path: '', component: HomeComponent },//parte de login
   {
     path: '',
   component: LayoutComponent,  // Com layout 
    children: [
      { path: 'courses-carousel', component: CoursesCarouselComponent },
      { path: 'list-films', component: ListFilmsComponent},// canActivate: [AdminGuard] }, // parte de gabriel
      { path: 'about-us', component: AboutUsComponent },
  ],
  },
 

  { path: 'cadastro-usuario', component: CadastrousuarioComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'adicionar-curso', component: AdicionarCursoComponent },
  { path: 'home', component: HomeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
