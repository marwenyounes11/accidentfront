import { Component, OnInit ,Inject} from '@angular/core';
import { DegatService} from '../../service/degat.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';



@Component({
  selector: 'app-degatmateriel',
  templateUrl: './degatmateriel.component.html',
  styleUrls: ['./degatmateriel.component.css']
})
export class DegatMaterielComponent implements OnInit {

  public degatmateriels;
  constructor(public crudApi: DegatService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getDegatMateriels().subscribe(
      response =>{this.degatmateriels= response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this degat ?')) {
    this.crudApi.deleteDegat(id)
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
