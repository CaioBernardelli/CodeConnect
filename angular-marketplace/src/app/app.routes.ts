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
import { NotificationListComponent } from './notification-list/notification-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },//parte de login
  {
    path: '',
    component: LayoutComponent,  // Com layout 
    children: [
      { path: 'courses-carousel', component: CoursesCarouselComponent },
      { path: 'list-films', component: ListFilmsComponent },// canActivate: [AdminGuard] }, // parte de gabriel
      { path: 'about-us', component: AboutUsComponent },
    ],
  },

  {
    path: 'remover-usuario/:id',
    component: AdminDashboardComponent
  },
  { path: 'cadastro-usuario', component: CadastrousuarioComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'adicionar-curso', component: AdicionarCursoComponent },
  { path: 'home', component: HomeComponent },
  // Adicione uma rota para teste
  { path: 'notifications', component: NotificationListComponent },
  // outras rotas...



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
