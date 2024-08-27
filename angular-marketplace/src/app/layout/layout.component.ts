import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { NavComponent } from '../components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,MatToolbarModule,NavComponent , HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
