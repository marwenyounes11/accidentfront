import { Component, OnInit ,Inject, Input} from '@angular/core';
import { DroitService} from '../../service/droit.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-droit',
  templateUrl: './droit.component.html',
  styleUrls: ['./droit.component.css']
})
export class DroitComponent implements OnInit {

  @Input() droits;
  constructor(public crudApi: DroitService, public toastr: ToastrService,
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
    this.crudApi.getListDroits().subscribe(
      response =>{this.droits = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this droit ?')) {
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
              action: res.action,
            });
            
          }
        );
        
      } 
     
  }

}
