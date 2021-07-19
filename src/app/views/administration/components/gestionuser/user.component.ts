import { Component, OnInit ,Inject} from '@angular/core';
import { UserService} from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users;
  constructor(public crudApi: UserService, public toastr: ToastrService,
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
    this.crudApi.getAll().subscribe(
      response =>{this.users = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this user ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.getData();
        },
        error => console.log(error));
  }
  }
  selectData(id ) {
    this.crudApi.choixmenu = "M";
   
    if (id) {
        this.crudApi.getData(+id).subscribe(
          res => {
            console.log(res.id);
            this.crudApi.dataForm= this.fb.group({
              id:res.id,
              name: res.name,
            username: res. username,
            email: res.email,
            confirmEmail: res.email,
            password: res.password,
            confirmPassword: res.password,
            idrole: res.role.id,
            });
            
          }
        );
        
      } 
     
  }

}
