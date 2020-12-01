import { Component, OnInit ,Inject} from '@angular/core';
import { AccidentTransportService} from '../../service/accidenttransport.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AddAccidentTransportComponent } from '../add-accidenttransport/add-accidenttransport.component';


@Component({
  selector: 'app-accidenttransport',
  templateUrl: './accidenttransport.component.html',
  styleUrls: ['./accidenttransport.component.css']
})
export class AccidentTransportComponent implements OnInit {

  public accidenttransports;
  constructor(public crudApi:AccidentTransportService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.accidenttransports= response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this accident transport ?')) {
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
