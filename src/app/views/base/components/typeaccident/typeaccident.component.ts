import { Component, OnInit ,Inject} from '@angular/core';
import { TypeAccident } from '../../model/typeaccident';
import { TypeAccidentService} from '../../service/typeaccident.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-typeaccident',
  templateUrl: './typeaccident.component.html',
  styleUrls: ['./typeaccident.component.css']
})
export class TypeAccidentComponent implements OnInit {
  public typeAccidents;
 typeaccident : TypeAccident[];
  constructor(public crudApi: TypeAccidentService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.typeAccidents = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Type Accident ?')) {
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
  selectData(item) {
    this.crudApi.choixmenu = "M"; 
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }

}
