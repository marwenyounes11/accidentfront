import {Component, OnInit} from '@angular/core';
import { INavData } from '@coreui/angular';
import { AuthStorageService } from '../../services/auth-storage.service';
import { UserService } from '../../views/administration/service/user.service';
import { RoleService } from '../../views/administration/service/role.service';
import { RubriqueService } from '../../views/administration/service/rubrique.service';
import { SousRubriqueService } from '../../views/administration/service/sousrubrique.service';
import { Rubrique } from '../../views/administration/model/rubrique';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
 
public username;
public user;
public role ;
public rubriques;
public sousrubrique;
public nav :INavData[];

  constructor(
    private router : Router, private authStorageService: AuthStorageService,private userService: UserService,private roleService: RoleService,private sousrubriqueService: SousRubriqueService,private rubriqueService: RubriqueService
  ) { }

  ngOnInit() {
   
     
    this.username=this.authStorageService.getUserName();
    this.userService.getUser(this.username).subscribe(
     data => {
        this.user = data;
    });

    this.rubriqueService.getAll().subscribe(
      rubrique => {
         this.rubriques = rubrique;
     });
   
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  addSousRubrique(rubrique:Rubrique){
    this.nav=[{

    }]
    this.username=this.authStorageService.getUserName();
    this.userService.getUser(this.username).subscribe(
     data => {
        this.user = data;
    });
    let ok=false;
    if(rubrique.libelle=="ADMINISTRATION"){
      if(this.user.role.name=="Admin"){
       ok=true;
        }
    }else if(rubrique.libelle=="EQUIPEMENT"){
      if(this.user.role.name=="ChefSecurite"){
       ok=true;
        }
    }else if(rubrique.libelle=="PARAMETRES"){
      if(this.user.role.name=="ChefSecurite" || this.user.role.name=="AgentPcr"){
       ok=true;
        }
      }else if(rubrique.libelle=="RAPPORTS"){
        if(this.user.role.name=="PDG" ){
         ok=true;
          }
      }else if(rubrique.libelle=="STATISTIQUES"){
        if(this.user.role.name=="PDG" ){
         ok=true;
          }
      }else{
        console.log("erreur");
      }
      if(ok==true){
    rubrique.sousRubriques.forEach(sousRubrique => {
      console.log(sousRubrique.id);
      this.nav.push(
          {
            name: sousRubrique.libelle,
            url: '/home/'+rubrique.libelle.toLowerCase()+'/'+sousRubrique.libelle.toLowerCase(),
            icon: 'icon-wrench',
           
          }
        );
      }
      );
    }else{
     this.router.navigateByUrl( '/403');
    }

  // console.log(this.nav);
  }
  
}
