import { Component, OnInit ,Inject, Input} from '@angular/core';
import { RubriqueService} from '../../service/rubrique.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit {

  @Input() rubriques;
  constructor(public crudApi: RubriqueService, public toastr: ToastrService,
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
      response =>{this.rubriques = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this rubrique ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
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
              libelle: res.libelle,
            });
            
          }
        );
        
      } 
     
  }

}
