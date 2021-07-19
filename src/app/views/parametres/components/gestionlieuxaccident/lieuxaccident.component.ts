import { Component, OnInit ,Inject, Input} from '@angular/core';
import { LieuxAccident} from '../../model/lieuxaccident';
import { LieuxAccidentService} from '../../service/lieuxaccident.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Component({
  selector: 'app-lieuxaccident',
  templateUrl: './lieuxaccident.component.html',
  styleUrls: ['./lieuxaccident.component.css']
})
export class LieuxAccidentComponent implements OnInit {

  @Input() lieuxAccidents ;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: LieuxAccidentService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveLieux();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.lieuxAccidents = response;}
     );
   
  }
  
  retrieveLieuxMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getLieuxPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.lieuxAccidents = response;
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

  retrieveLieux(): void {
    let p = this.page1-1;
    
    this.crudApi.getLieuxPagination( p, this.pageSize1).subscribe(
      response =>{this.lieuxAccidents = response;
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
    this.retrieveLieux();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveLieux();
  }

  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Lieux Accident ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveLieux();
        },
        error => console.log(error));
  }
  }
  selectData(item : LieuxAccident) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }
}
