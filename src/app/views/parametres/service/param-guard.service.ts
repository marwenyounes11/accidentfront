import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStorageService } from '../../../services/auth-storage.service';
import { UserService } from '../../administration/service/user.service';


@Injectable({
  providedIn: 'root',
})
export class ParamGuard implements CanActivate,CanActivateChild {
public user;
public username;
  constructor(private authStorageService: AuthStorageService,private userService: UserService, private router: Router) {
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let ok;
    let u;
    u=this.authStorageService.getUser();
   this.user=JSON.parse(u);
        if ( this.user.role.name=="ChefSecurite" ){
          ok= true;
          console.log(ok);
        }else if (  this.user.role.name=="AgentPcr"){
          ok= true;
          console.log(ok);
        }
        else {
          this.router.navigateByUrl('/403');
          ok= false;
        }
  
    
      return ok;
    
  
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let ok;
    let u;
    u=this.authStorageService.getUser();
   this.user=JSON.parse(u);
   if ( this.user.role.name=="ChefSecurite" ){
    ok= true;
    console.log(ok);
  }else if (  this.user.role.name=="AgentPcr"){
    ok= true;
    console.log(ok);
  }
  else {
    this.router.navigateByUrl('/403');
    ok= false;
  }

   
    
      return ok;
    
  
  }
}
