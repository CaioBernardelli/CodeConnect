import { Component, importProvidersFrom } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';



@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    imports: [MatIconModule, MatListModule, MatSidenavModule, RouterModule]
})
export class NavComponent {

}

