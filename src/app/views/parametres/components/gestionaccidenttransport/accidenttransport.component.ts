import { Component, OnInit ,Inject, Input} from '@angular/core';
import { AccidentTransportService} from '../../service/accidenttransport.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Component({
  selector: 'app-accidenttransport',
  templateUrl: './accidenttransport.component.html',
  styleUrls: ['./accidenttransport.component.css']
})
export class AccidentTransportComponent implements OnInit {

  @Input() accidenttransports;
  atransports;
  @Input() page1=1 ;
  @Input()  count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi:AccidentTransportService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveAccidentTransport();
  }
  retrieveAccidentTransport(): void {
    let p = this.page1-1;
    
    this.crudApi.getAccidentsTransportPagination( p, this.pageSize1).subscribe(
      response =>{this.accidenttransports = response;
        this.crudApi.getAccidentsTransport().subscribe(
         
          r =>{this.atransports = r;
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
    this.retrieveAccidentTransport();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveAccidentTransport();
  }

  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.accidenttransports= response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this accident transport ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveAccidentTransport();
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
            idaccident: res.accident.id,
            idtransport: res.moyentransport.id,
          });
          
        }
      );
  }
  }
}
