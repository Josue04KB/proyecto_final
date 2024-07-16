import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './authApp/login/login.component';
import { RegisterComponent } from './authApp/register/register.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RevistasComponent } from './pages/revistas/revistas.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EnviarComponent } from './pages/enviar/enviar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    FormsModule,DashboardComponent, 
    LoginComponent, 
    RegisterComponent, 
    FooterComponent, 
    NavbarComponent,
    RevistasComponent,
    ProfileComponent,
    EnviarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Revistas';
}
