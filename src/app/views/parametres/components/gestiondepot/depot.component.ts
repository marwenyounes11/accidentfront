import { Component, OnInit ,Inject, Input} from '@angular/core';
import { Depot } from '../../model/depot';
import { DepotService} from '../../service/depot.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AuthStorageService } from '../../../../services/auth-storage.service';
import { HttpRequest } from '@angular/common/http';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  @Input() depots;
  @Input() page1=1 ;
  motcle1 = '';
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: DepotService, public toastr: ToastrService,private authStorageService: AuthStorageService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveDepot();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.depots = response ;}
     );
   
  }
  
  retrieveDepotMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getDepotsPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.depots = response;
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

  retrieveDepot(): void {
    let p = this.page1-1;
    
    this.crudApi.getDepotsPagination( p, this.pageSize1).subscribe(
      response =>{this.depots = response;
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
    this.retrieveDepot();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveDepot();
  }
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this depot ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveDepot();
        },
        error => console.log(error));
  }
  }
  selectData(item : Depot) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }

}
