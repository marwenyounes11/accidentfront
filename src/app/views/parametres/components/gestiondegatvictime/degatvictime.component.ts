import { Component, OnInit ,Inject, Input} from '@angular/core';
import { DegatVictimeService} from '../../service/degatvictime.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-degatvictime',
  templateUrl: './degatvictime.component.html',
  styleUrls: ['./degatvictime.component.css']
})
export class DegatVictimeComponent implements OnInit {

  @Input() degatvictimes;
  @Input() page1=1 ;
  @Input()  count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi:DegatVictimeService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  retrieveDegatVictime(): void {
    let p = this.page1-1;
    
    this.crudApi.getDegatVictimesPagination( p, this.pageSize1).subscribe(
      response =>{this.degatvictimes = response;
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
 
  handlePageChange1(event): void {
    this.page1 = event;
    this.retrieveDegatVictime();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveDegatVictime();
  }

  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.degatvictimes= response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this degat victime ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
          this.retrieveDegatVictime();
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
            iddegat: res.degat.id,
            idvictime: res.victime.id,
          });
          
        }
      );
  }
  }
}
