import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStorageService } from '../../../services/auth-storage.service';
import { User } from '../../administration/model/user';
import { UserService } from '../../administration/service/user.service';


@Injectable({
  providedIn: 'root',
})
export class EquipGuard implements CanActivate , CanActivateChild{
public user;
public username;
  constructor(private authStorageService: AuthStorageService,private userService: UserService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
    let ok;
   let u;
    u=this.authStorageService.getUser();
   this.user=JSON.parse(u);
        if ( this.user.role.name=="ChefSecurite" ){ 
          ok= true;
          
        }else {
          this.router.navigateByUrl('/403');
          ok= false;
          
        }
        return ok;
     
     
 
  } 
  
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
    let ok=false;
    let u;
    u=this.authStorageService.getUser();
   this.user=JSON.parse(u);
   
    if ( this.user.role.name=="ChefSecurite" ){ 
      ok= true;
      
    }else {
      this.router.navigateByUrl('/403');
      ok= false;
      
    }
    return ok;
      } 
  
}
