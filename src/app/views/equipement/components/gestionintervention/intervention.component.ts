import { Component, OnInit ,Inject, Input} from '@angular/core';
import { InterventionService} from '../../service/intervention.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  motcle1 = '';
  @Input() page1=1 ;
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  @Input() interventions;
  constructor(public crudApi:InterventionService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveIntervention();
  }

  retrieveInterventionMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getInterventionsPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.interventions = response;
        this.crudApi.getInterventions().subscribe(
         
          r =>{
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrieveIntervention(): void {
    let p = this.page1-1;
    
    this.crudApi.getInterventionsPagination( p, this.pageSize1).subscribe(
      response =>{this.interventions = response;
        this.crudApi.getInterventions().subscribe(
         
          r =>{
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  handlePageChange1(event): void {
    this.page1 = event;
    this.retrieveIntervention();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveIntervention();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.interventions= response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this intervention ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveIntervention();
        },
        error => console.log(error));
  }
  }
  selectData(item ) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }
}
