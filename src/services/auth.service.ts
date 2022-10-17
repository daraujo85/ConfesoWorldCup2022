import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  login(usuario: string, senha: string): boolean {
    this.isLoggedIn = (usuario.toLowerCase() == "admin" && senha.toLowerCase() == "admin")
    return this.isLoggedIn
  }
}
