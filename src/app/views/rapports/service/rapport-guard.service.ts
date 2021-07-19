import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthStorageService } from '../../../services/auth-storage.service';
import { UserService } from '../../administration/service/user.service';


@Injectable({
  providedIn: 'root',
})
export class RapportGuard implements CanActivate,CanActivateChild {
public user;
public username;
  constructor(private authStorageService: AuthStorageService,private userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   
    let u;
    u=this.authStorageService.getUser();
   this.user=JSON.parse(u);
    if ( this.user.role.name=="PDG" ){
      return true;
    }else {
      this.router.navigateByUrl('/403');
      return false;
    }
  
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    let u;
    u=this.authStorageService.getUser();
   this.user=JSON.parse(u);
    if ( this.user.role.name=="PDG" ){
      return true;
    }else {
      this.router.navigateByUrl('/403');
      return false;
    }
    
  
  }

}
