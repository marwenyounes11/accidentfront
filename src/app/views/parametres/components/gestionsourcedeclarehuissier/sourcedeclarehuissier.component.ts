import { Component, OnInit ,Inject, Input} from '@angular/core';
import { SourceDeclareHuissierService} from '../../service/sourcedeclarehuissier.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-sourcedeclarehuissier',
  templateUrl: './sourcedeclarehuissier.component.html',
  styleUrls: ['./sourcedeclarehuissier.component.css']
})
export class SourceDeclareHuissierComponent implements OnInit {

  @Input() sourcedeclarehuissier;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: SourceDeclareHuissierService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveSourceDeclareHuissiers();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.sourcedeclarehuissier = response;}
     );
   
  }
  
  retrieveSourceDeclareHuissiersMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getSourceDeclareHuissierPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.sourcedeclarehuissier = response;
        this.crudApi.getSourceDeclareHuissiers().subscribe(
         
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

  retrieveSourceDeclareHuissiers(): void {
    let p = this.page1-1;
    
    this.crudApi.getSourceDeclareHuissierPagination( p, this.pageSize1).subscribe(
      response =>{this.sourcedeclarehuissier = response;
        this.crudApi.getSourceDeclareHuissiers().subscribe(
         
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
    this.retrieveSourceDeclareHuissiers();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveSourceDeclareHuissiers();
  }
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this source declare huissier ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveSourceDeclareHuissiers();
        },
        error => console.log(error));
  }
  }
  selectData(item ) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }
}
