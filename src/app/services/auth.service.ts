import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authStorageService: AuthStorageService,
              protected http: HttpClient,
              private router: Router) {
  }

  login(credentials: any): Observable<any> {
  
    return this.http.post(`${environment.apiBaseUrl}/api/auth/signin`, credentials)
      .pipe(tap(data => {this.authStorageService.saveAccessToken(data.accessToken)},

      ));
  }

  logout(): void {
    this.authStorageService.clear();
    this.router.navigateByUrl('/login');
  }
}
