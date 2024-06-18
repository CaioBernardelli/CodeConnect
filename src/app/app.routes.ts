import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFilmsComponent } from './list-films/list-films.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "list-films",component: ListFilmsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
