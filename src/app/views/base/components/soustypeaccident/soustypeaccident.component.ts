import { Component, OnInit ,Inject} from '@angular/core';
import { SousTypeAccident } from '../../model/soustypeaccident';
import { SousTypeAccidentService} from '../../service/soustypeaccident.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AddSousTypeAccidentComponent } from '../add-soustypeaccident/add-soustypeaccident.component';
@Component({
  selector: 'app-soustypeaccident',
  templateUrl: './soustypeaccident.component.html',
  styleUrls: ['./soustypeaccident.component.css']
})
export class SousTypeAccidentComponent implements OnInit {

  public sousTypeAccidents;
  constructor(public crudApi: SousTypeAccidentService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.sousTypeAccidents = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Sous Type Accident ?')) {
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
  selectData(item : SousTypeAccident) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }

}
