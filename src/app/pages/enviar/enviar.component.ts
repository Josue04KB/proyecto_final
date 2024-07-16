import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enviar',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './enviar.component.html',
  styleUrl: './enviar.component.css'
})
export class EnviarComponent {

}
