import { Component, importProvidersFrom } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';


@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    imports: [AboutUsComponent,MatIconModule, MatListModule, MatSidenavModule, RouterModule]
})
export class NavComponent {

}

