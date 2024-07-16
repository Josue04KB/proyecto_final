import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private user: any = null;

  // Método para establecer el estado de autenticación
  setAuthenticated(status: boolean) {
    this.isAuthenticated = status;
  }
  // Método para comprobar si el usuario está autenticado
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
    }

  private loggedIn = false;

  constructor() {
    this.loggedIn = !!localStorage.getItem('loggedInUser');
  }

  register(userData: any) {
    this.user = userData;
    console.log("Usuario registrado:", this.user);
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const userExists = users.some(user => user.email === email && user.password === password);
    if (userExists) {
      localStorage.setItem('loggedInUser', email);
      this.loggedIn = true;
    }
    return userExists;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  private getUsers(): any[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }
  getUser() {
    return this.user;
  }
}
