import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const login = localStorage.getItem('login');
    // Check whether the token is expired and return
    // true or false
    return !!login
  }
}