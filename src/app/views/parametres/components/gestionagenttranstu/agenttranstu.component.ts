import { Component, OnInit ,Inject, Input} from '@angular/core';
import { AgentTranstuService} from '../../service/agenttranstu.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-agenttranstu',
  templateUrl: './agenttranstu.component.html',
  styleUrls: ['./agenttranstu.component.css']
})
export class AgentTranstuComponent implements OnInit {

  @Input() agenttranstus;
  ats;
  motcle1 = '';
  @Input() page1=1 ;
  @Input()  count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: AgentTranstuService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveAgentTranstu();
  }
  retrieveAgentTranstuMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getAgentTranstusPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.agenttranstus = response;
        this.crudApi.getAgentTranstus().subscribe(
         
          r =>{this.ats = r;
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

  retrieveAgentTranstu(): void {
    let p = this.page1-1;
    
    this.crudApi.getAgentTranstusPagination( p, this.pageSize1).subscribe(
      response =>{this.agenttranstus = response;
        this.crudApi.getAgentTranstus().subscribe(
         
          r =>{this.ats = r;
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
    this.retrieveAgentTranstu();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveAgentTranstu();
  }
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.agenttranstus = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Agent Transtu ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveAgentTranstu();
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
            function: res.function,
            name: res.name,
            lastName: res.lastName,
            matricule: res.matricule,
            phone: res.phone,
            idsourceinform: res.sourceinform.id,
          });
          
        }
      );
  }
  }

}
