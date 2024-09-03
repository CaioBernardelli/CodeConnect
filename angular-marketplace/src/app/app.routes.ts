import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CadastrousuarioComponent } from './components/cadastrousuario/cadastrousuario.component';
import { LoginInComponent } from './components/login-in/login-in.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { LayoutComponent } from './layout/layout.component';
import { CoursesCarouselComponent } from './components/courses-carousel/courses-carousel.component';
import { AdicionarCursoComponent } from './components/adicionar-curso/adicionar-curso.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { PurchasingCourseComponent } from './components/carrinho/purchasing-course/purchasing-course.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },//parte de login
  {
    path: '',
    component: LayoutComponent,  // Com layout 
    children: [
      { path: 'courses-carousel', component: CoursesCarouselComponent },
      { path: 'list-films', component: ListFilmsComponent },
      { path: 'about-us', component: AboutUsComponent },
     

    ],
  },


  { path: 'carrinho', component: PurchasingCourseComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  { path: 'cadastro-usuario', component: CadastrousuarioComponent },
  { path: 'adicionar-curso', component: AdicionarCursoComponent, },
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
