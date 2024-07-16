import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../authApp/auth.service';

@Component({
  selector: 'app-revistas',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './revistas.component.html',
  styleUrl: './revistas.component.css'
})
export class RevistasComponent {
  
  
}
