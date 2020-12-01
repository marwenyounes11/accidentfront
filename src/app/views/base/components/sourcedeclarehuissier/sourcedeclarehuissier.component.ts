import { Component, OnInit ,Inject} from '@angular/core';
import { SourceDeclareHuissierService} from '../../service/sourcedeclarehuissier.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-sourcedeclarehuissier',
  templateUrl: './sourcedeclarehuissier.component.html',
  styleUrls: ['./sourcedeclarehuissier.component.css']
})
export class SourceDeclareHuissierComponent implements OnInit {

 public sourcedeclarehuissier;
  constructor(public crudApi: SourceDeclareHuissierService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.sourcedeclarehuissier = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this source declare huissier ?')) {
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
  selectData(item ) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }
}
