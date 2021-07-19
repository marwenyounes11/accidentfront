import { Component, OnInit ,Inject, Input} from '@angular/core';
import { SecuriteService} from '../../service/securite.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.css']
})
export class SecuriteComponent implements OnInit {

  @Input() securites;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: SecuriteService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveSecurites();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.securites = response;}
     );
   
  }
  
  retrieveSecuritesMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getSecuritePaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.securites = response;
        this.crudApi.getSecurites().subscribe(
         
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

  retrieveSecurites(): void {
    let p = this.page1-1;
    
    this.crudApi.getSecuritePagination( p, this.pageSize1).subscribe(
      response =>{this.securites = response;
        this.crudApi.getSecurites().subscribe(
         
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
    this.retrieveSecurites();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveSecurites();
  }

  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this securite ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveSecurites();
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
            type: res.type,
            address: res.address,
            idsourceinform: res.sourceinform.id,
          });
          
        }
      );
  }
  }

}
