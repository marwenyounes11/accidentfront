import { Component, OnInit ,Inject, Input} from '@angular/core';
import { DroitRolesService} from '../../service/droitroles.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-droitroles',
  templateUrl: './droitroles.component.html',
  styleUrls: ['./droitroles.component.css']
})
export class DroitRolesComponent implements OnInit {

  @Input() droitroles;
   btnvalue: string;
  constructor(public crudApi: DroitRolesService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
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
    this.getData();
  }
  
  getData() {
    this.crudApi.getListDroitRoles().subscribe(
      response =>{this.droitroles = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this droitroles ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
          this.getData();
        },
        error => console.log(error));
  }
  }
  selectData(id ) {
    this.crudApi.choixmenu = "M";
   this.btnvalue ='Update';
    if (id) {
        this.crudApi.getData(+id).subscribe(
          res => {
            console.log(res.id);
            this.crudApi.dataForm= this.fb.group({
              id:res.id,
              iddroit: res.droit.id,
              idrole: res.role.id,
            });
            
          }
        );
        
      } 
     
  }

}
