import { Component, OnInit ,Inject,  ViewChild,
  AfterViewInit,
  ElementRef, Renderer2, ViewChildren, QueryList} from '@angular/core';
import { UserService} from '../../../service/user.service';
import { RoleService} from '../../../service/role.service'
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { DroitService } from '../../../service/droit.service';
import { RubriqueService } from '../../../service/rubrique.service';
import { Role } from '../../../model/role';
import { Droit } from '../../../model/droit';
import { DroitRolesService } from '../../../service/droitroles.service';
import { DroitRoles } from '../../../model/droitroles';
import { SousRubrique } from '../../../model/sousrubrique';
import { SousRubriqueService } from '../../../service/sousrubrique.service';
import { Rubrique } from '../../../model/rubrique';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChildren('checkboxElement') checkboxElement:QueryList<ElementRef>;
  @ViewChildren("roleElement") roleElement:QueryList<ElementRef>;
  @ViewChildren('sousrubriqueElement') sousrubriqueElement:QueryList<ElementRef>;
  public droitroles;
  public roles;
  public rubriques;
  public sousRubriques;
  public droits;
  public droit;
  public sousRubrique;
  public role;
  ok:boolean=false;
  r;
  s;
  idsousrubrique;
  idrole;
  iddroit;
  arraysr: number[] =[];
  arrayrole:number[] =[];
  arraydroit:number[] =[];
  arrayd:any[] =[];
  public roleForm={
    id: '',
    name:''
  }
  public droitrolesForm={
    id: '',
    iddroit:0,
    idsousrubrique:0,
    idrole:0,
    checked:false
  }
  name : string;
  
  coucher:boolean=false;
  constructor(public crudApi: DroitService,public crudApidr: DroitRolesService, public toastr: ToastrService,public crudApir: RoleService,public crudApiru: RubriqueService,public crudApisru: SousRubriqueService,
    private router : Router,public fb: FormBuilder,private renderer: Renderer2
    ) { }
 
    isCollapsed: boolean = false;
    iconCollapse: string = 'icon-arrow-up';
  
    collapsed(event: any): void {
      // console.log(event);
    }
  
    expanded(event: any): void {
      // console.log(event);
    }
  
    toggleCollapse(): void {
      this.isCollapsed = !this.isCollapsed;
      this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    }
    ngOnInit() {
      this.crudApi.getAll().subscribe(
        droit =>{this.droits = droit;
        });
      
      this.crudApir.getAll().subscribe(
        response =>{this.roles = response;
        }
       );
      
       
    
       this.crudApiru.getAll().subscribe(
        rubrique =>{this.rubriques = rubrique;}
       );
      
      
       
    }
  
 
 
  getSousRubrique(rubrique:Rubrique,checkboxElement,roleElement){
    const t = document.getElementById('t');
    t.style.display = "block";
   this.sousRubriques=rubrique.sousRubriques;
   
    checkboxElement.changes.subscribe((c) => {
      c.forEach(cb => {
        cb.nativeElement.checked=false;
        let str = cb.nativeElement.value;
        let words = str.split(',');
                  this.crudApidr.getDroitRolesByDroitSousRubriqueRole(Number(cb.nativeElement.id),Number(words[0]),Number(words[1])).subscribe(
                    res => {
                      if(res!=null) {
                        cb.nativeElement.checked=true;
                      }else if(res==null) {
                        cb.nativeElement.checked=false;
                      }
                });
                });
                });
          
    
   
 
     
  }
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this user ?')) {
    this.crudApir.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
         
        },
        error => console.log(error));
     }
  }

  

  addInput() {
   const input = document.getElementById('name');
   const label= document.getElementById('l');
  const icone= document.getElementById('ic');
    input.style.display = "inline";
   icone.style.display = "inline";
    label.style.display = "none";
  }
  addData() {
    this.roleForm.name=this.name;
    this.crudApir.createData(this.roleForm).subscribe(  data => {
      console.log(data);
      this.toastr.success(' data successfully !'); 
    });
    const input = document.getElementById('name');
    const label= document.getElementById('l');
   const icone= document.getElementById('ic');
  input.style.display = "none";  
   icone.style.display = "none";
   label.style.display = "inline";
  }

 
  changeDroits(droit,id,role: Role,$event){
    var iddroit  =droit.id;
   var idsousrubrique  =id;
   var idrole=role.id;
   this.droitrolesForm.iddroit=iddroit;
   this.droitrolesForm.idsousrubrique=idsousrubrique;
   this.droitrolesForm.idrole=idrole;

 
    this.crudApidr.getDroitRolesByDroitSousRubriqueRole(iddroit,idsousrubrique,idrole).subscribe(
      res => {
       this.droitroles=res;
       console.log( this.droitroles);
       if(this.droitroles==null){
       
      
        this.crudApidr.createData( this.droitrolesForm).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
         
        });
        
      } else{
        this.crudApidr.deleteData( this.droitroles.id).subscribe( data => {
          this.toastr.warning( 'Delete Faite avec Success');
          
        });
     
      }
      
        });      
  

}

}
