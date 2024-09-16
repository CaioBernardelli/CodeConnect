import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CadastrousuarioComponent } from './components/cadastrousuario/cadastrousuario.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { CoursesCarouselComponent } from './components/courses-carousel/courses-carousel.component';
import { AdicionarCursoComponent } from './components/adicionar-curso/adicionar-curso.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { PurchasingCourseComponent } from './components/carrinho/purchasing-course/purchasing-course.component';
import { UsuariofirebaseComponent } from './components/usuariofirebase/usuariofirebase.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'courses-carousel', component: CoursesCarouselComponent },
      { path: 'list-films', component: ListFilmsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'firebase', component: UsuariofirebaseComponent }

    ],
  },
  { path: 'carrinho', component: PurchasingCourseComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  { path: 'cadastro-usuario', component: CadastrousuarioComponent },
  { path: 'adicionar-curso', component: AdicionarCursoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notifications', component: NotificationListComponent },
  // Adicione uma rota wildcard para tratar rotas não encontradas
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
