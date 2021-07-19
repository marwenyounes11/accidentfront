import { Component, OnInit ,Inject, Input} from '@angular/core';
import { AmbulancierService} from '../../service/ambulancier.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-ambulancier',
  templateUrl: './ambulancier.component.html',
  styleUrls: ['./ambulancier.component.css']
})
export class AmbulancierComponent implements OnInit {

  @Input() ambulanciers;
  as;
  motcle1 = '';
  @Input() page1=1 ;
  @Input()  count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: AmbulancierService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveAmbulancier();
  }
  retrieveAmbulancierMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getAmbulanciersPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.ambulanciers = response;
        this.crudApi.getAmbulanciers().subscribe(
         
          r =>{this.as = r;
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

  retrieveAmbulancier(): void {
    let p = this.page1-1;
    
    this.crudApi.getAmbulanciersPagination( p, this.pageSize1).subscribe(
      response =>{this.ambulanciers = response;
        this.crudApi.getAmbulanciers().subscribe(
         
          r =>{this.as = r;
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
    this.retrieveAmbulancier();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveAmbulancier();
  }
 
  
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.ambulanciers = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this ambulancier ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveAmbulancier();
        },
        error => console.log(error));
  }
  }
  selectData(id ) {
    if (id) {
      this.crudApi.getData(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
            id:res.id,
            name: res.name,
            lastName: res.lastName,
            matricule: res.matricule,
            phone: res.phone,
            idsourceinform: res.sourceinform.id,
          });
          
        }
      );
  }
  }

}
