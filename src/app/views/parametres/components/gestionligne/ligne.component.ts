import { Component, OnInit ,Inject, Input} from '@angular/core';
import { Ligne } from '../../model/ligne';
import { LigneService} from '../../service/ligne.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {

  @Input() lignes;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: LigneService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveLignes();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.lignes = response;}
     );
   
  }
  
  retrieveLignesMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getLignePaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.lignes = response;
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

  retrieveLignes(): void {
    let p = this.page1-1;
    
    this.crudApi.getLignePagination( p, this.pageSize1).subscribe(
      response =>{this.lignes = response;
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
    this.retrieveLignes();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveLignes();
  }
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Ligne ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveLignes();
        },
        error => console.log(error));
  }
  }
  selectData(item : Ligne) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }

}
