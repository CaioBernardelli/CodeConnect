import { Component } from '@angular/core';
import {MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
