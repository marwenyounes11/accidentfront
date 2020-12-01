import { Component, OnInit ,Inject} from '@angular/core';
import { LieuxAccident} from '../../model/lieuxaccident';
import { LieuxAccidentService} from '../../service/lieuxaccident.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AddLieuxAccidentComponent } from '../add-lieuxaccident/add-lieuxaccident.component';

@Component({
  selector: 'app-lieuxaccident',
  templateUrl: './lieuxaccident.component.html',
  styleUrls: ['./lieuxaccident.component.css']
})
export class LieuxAccidentComponent implements OnInit {

 public lieuxAccidents ;
  constructor(public crudApi: LieuxAccidentService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.lieuxAccidents = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Lieux Accident ?')) {
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
  selectData(item : LieuxAccident) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }
}
