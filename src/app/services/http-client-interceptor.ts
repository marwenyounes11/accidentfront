import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { AuthStorageService } from './auth-storage.service';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private authStorageService: AuthStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = request.headers;
  

    if (request.url !== `http://localhost:8989/api/auth/signin`   && this.authStorageService.hasAccessToken()) {
      headers = headers.set('Authorization', `Bearer ${this.authStorageService.getAccessToken()}`);
      
    }

    return next.handle(request.clone({headers})).pipe(
      catchError((errorResponse) => {
        if (errorResponse instanceof HttpErrorResponse && errorResponse.status === 401) {
          this.authService.logout();
         
        }

        return throwError(errorResponse);
      })
    );
  }
}
