import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../administration/service/user.service';
import { AuthStorageService } from '../../services/auth-storage.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  credentials: { username?: string, password?: string } = {};
  submitted = false;
  failed = false;
user;
  constructor(private authService: AuthService, private authStorageService: AuthStorageService,private userService: UserService,private router: Router) {
  }

  login() {
    this.submitted = true;
    this.failed = false;
    this.userService.getUser(this.credentials.username).subscribe(
      data => {
        this.authStorageService.saveUser(JSON.stringify(data));
       });
    this.authStorageService.saveUserName(this.credentials.username);
    this.authService.login(this.credentials).subscribe(
      () => this.router.navigateByUrl('/home'),
      () => {
        this.failed = true;
        this.submitted = false;
      }
    );
  }
}