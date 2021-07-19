import { Component, OnInit ,Inject, Input} from '@angular/core';
import { DegatTransportService} from '../../service/degattransport.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-degattransport',
  templateUrl: './degattransport.component.html',
  styleUrls: ['./degattransport.component.css']
})
export class DegatTransportComponent implements OnInit {

  @Input() degattransports;
  dtransports;
  @Input() page1=1 ;
  @Input()  count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi:DegatTransportService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.degattransports= response;}
     );
   
  }
  
  retrieveDegatTransport(): void {
    let p = this.page1-1;
    
    this.crudApi.getDegatTransportsPagination( p, this.pageSize1).subscribe(
      response =>{this.degattransports = response;
        this.crudApi.getDegatTransports().subscribe(
         
          r =>{this.dtransports = r;
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
    this.retrieveDegatTransport();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveDegatTransport();
  }

  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this degat transport ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveDegatTransport();
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
            idtransport: res.moyentransport.id,
          });
          
        }
      );
  }
  }
}
