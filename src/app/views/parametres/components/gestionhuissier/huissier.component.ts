import { Component, OnInit ,Inject, Input} from '@angular/core';
import { HuissierService} from '../../service/huissier.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-huissier',
  templateUrl: './huissier.component.html',
  styleUrls: ['./huissier.component.css']
})
export class HuissierComponent implements OnInit {

  @Input() huissier;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: HuissierService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveHuissier();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.huissier = response;}
     );
   
  }
  
  retrieveHuissierMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getHuissiersPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.huissier = response;
        this.crudApi.getHuissiers().subscribe(
         
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

  retrieveHuissier(): void {
    let p = this.page1-1;
    
    this.crudApi.getHuissiersPagination( p, this.pageSize1).subscribe(
      response =>{this.huissier = response;
        this.crudApi.getHuissiers().subscribe(
         
          r =>{
            
            this.count1 =r.length;
            console.log(r.length);
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
    this.retrieveHuissier();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveHuissier();
  }
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this  huissier ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveHuissier();
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
            number: res.number,
            dateHuissier: res.dateHuissier,
            heureHuissier: res.heureHuissier,
            idaccident: res.accident.id,
            idsourcedeclarehuissier: res.sourcedeclarehuissier.id,
            idsecurite: res.securite.id
          });
          
        }
      );
  }
  }
}
