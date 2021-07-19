import { Component, OnInit ,Inject, Input} from '@angular/core';
import { DistrictService} from '../../service/district.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  @Input() districts;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: DistrictService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveDistrict();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.districts = response;}
     );
   
  }
  retrieveDistrictMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getDistrictsPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.districts = response;
        this.crudApi.getAll().subscribe(
         
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

  retrieveDistrict(): void {
    let p = this.page1-1;
    
    this.crudApi.getDistrictsPagination( p, this.pageSize1).subscribe(
      response =>{this.districts = response;
        this.crudApi.getAll().subscribe(
         
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
    this.retrieveDistrict();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveDistrict();
  }
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this district ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveDistrict();
        },
        error => console.log(error));
  }
  }
  selectData(item ) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }

}
