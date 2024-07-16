import { Routes } from '@angular/router';
import { LoginComponent } from './authApp/login/login.component';
import { RegisterComponent } from './authApp/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RevistasComponent } from './pages/revistas/revistas.component';
import { EnviarComponent } from './pages/enviar/enviar.component';



export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'revistas', component: RevistasComponent},
    { path: 'enviar', component: EnviarComponent},
    { path: '**', redirectTo: '/dashboard' }


    
];
