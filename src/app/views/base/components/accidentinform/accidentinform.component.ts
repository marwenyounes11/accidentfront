import { Component, OnInit ,Inject} from '@angular/core';
import { AccidentInformService} from '../../service/accidentinform.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AddAccidentInformComponent } from '../add-accidentinform/add-accidentinform.component';


@Component({
  selector: 'app-accidentinform',
  templateUrl: './accidentinform.component.html',
  styleUrls: ['./accidentinform.component.css']
})
export class AccidentInformComponent implements OnInit {

  public accidentinforms;
  constructor(public crudApi:AccidentInformService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.accidentinforms= response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this accident inform ?')) {
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
