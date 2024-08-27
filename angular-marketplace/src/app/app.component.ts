import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SearchCourseComponent } from './components/search-course/search-course.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrigido styleUrls
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    FooterComponent,
    MatButtonToggleModule,
    MatButtonModule,
  ]
})
export class AppComponent {
  title = 'angular-marketplace';
}
