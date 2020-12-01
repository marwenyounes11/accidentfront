import { Component, OnInit ,Inject} from '@angular/core';
import { SourceInfo} from '../../model/sourceinfo';
import { SourceInfoService} from '../../service/sourceinfo.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-sourceinfo',
  templateUrl: './sourceinfo.component.html',
  styleUrls: ['./sourceinfo.component.css']
})
export class SourceInfoComponent implements OnInit {

 public sourceinform;
  constructor(public crudApi: SourceInfoService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.sourceinform = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Source Info ?')) {
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
