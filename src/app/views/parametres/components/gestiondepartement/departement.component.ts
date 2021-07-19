import { Component, OnInit ,Inject, Input} from '@angular/core';
import { DepartementService} from '../../service/departement.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  @Input() departements;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: DepartementService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveDepartement();
  }
  retrieveDepartementMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getDepartementsPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.departements = response;
        this.crudApi.getDepartements().subscribe(
         
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

  retrieveDepartement(): void {
    let p = this.page1-1;
    
    this.crudApi.getDepartementsPagination( p, this.pageSize1).subscribe(
      response =>{this.departements = response;
        this.crudApi.getDepartements().subscribe(
         
          r =>{
            console.log(r.length);
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
    this.retrieveDepartement();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveDepartement();
  }
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.departements = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this departement ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveDepartement();
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
            nameDepartement: res.nameDepartement,
            idlieux: res.lieux.id
          });
          
        }
      );
  }
  }
}
