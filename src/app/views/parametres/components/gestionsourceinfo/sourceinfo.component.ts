import { Component, OnInit ,Inject, Input} from '@angular/core';
import { SourceInfoService} from '../../service/sourceinfo.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-sourceinfo',
  templateUrl: './sourceinfo.component.html',
  styleUrls: ['./sourceinfo.component.css']
})
export class SourceInfoComponent implements OnInit {

  @Input() sourceinform;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: SourceInfoService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveSourceInfos();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.sourceinform = response;}
     );
   
  }
  
  retrieveSourceInfoMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getSourceInfoPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.sourceinform = response;
        this.crudApi.getSourceInfos().subscribe(
         
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

  retrieveSourceInfos(): void {
    let p = this.page1-1;
    
    this.crudApi.getSourceInfoPagination( p, this.pageSize1).subscribe(
      response =>{this.sourceinform = response;
        this.crudApi.getSourceInfos().subscribe(
         
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
    this.retrieveSourceInfos();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveSourceInfos();
  }
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Source Info ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveSourceInfos();
        },
        error => console.log(error));
  }
  }
  selectData(item ) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }
}
