import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatCardModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'] // Corrigido para styleUrls
})
export class AboutUsComponent { }
