import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  private localStorage = localStorage;

  hasAccessToken(): boolean {
    return !!this.localStorage.getItem('access_token');
  }

  getAccessToken(): string {
    return this.localStorage.getItem('access_token');
  }

  saveAccessToken(token: string): void {
    this.localStorage.setItem('access_token', token);
  }

  getUserName(): string {
    return this.localStorage.getItem('username');
  }

  saveUserName(username): void {
    this.localStorage.setItem('username', username);
  }

  getUser(): string {
    return this.localStorage.getItem('user');
  }

  saveUser(user): void {
    this.localStorage.setItem('user', user);
  }
  clear(): void {
    this.localStorage.removeItem('access_token');
  }
}
