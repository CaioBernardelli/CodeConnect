import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { HttpClientModule } from '@angular/common/http';
import { CardFilmComponent } from './card-film/card-film.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SearchCourseComponent } from './search-course/search-course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrigido styleUrls
  imports: [
    CardFilmComponent,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ListFilmsComponent,
    HttpClientModule, // Corrigido HttpClientModule
    MatButtonToggleModule,
    MatButtonModule,
    SearchCourseComponent
  ]
})
export class AppComponent {
  title = 'angular-marketplace';
}
