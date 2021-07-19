import { Component, OnInit ,Inject, Input} from '@angular/core';
import { Agent } from '../../model/agent';
import { AgentService} from '../../service/agent.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  @Input() agents;
  @Input() as;
  motcle1 = '';
  @Input() page1=1 ;
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApi: AgentService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveAgent();
  }
  retrieveAgentMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getAgentsPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.agents = response;
        this.crudApi.getAgents().subscribe(
         
          r =>{this.as = r;
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

  retrieveAgent(): void {
    let p = this.page1-1;
    
    this.crudApi.getAgentsPagination( p, this.pageSize1).subscribe(
      response =>{this.agents = response;
        this.crudApi.getAgents().subscribe(
         
          r =>{this.as = r;
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
    this.retrieveAgent();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveAgent();
  }
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.agents = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this agent ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' agent supprimé avec succès'); 
          this.retrieveAgent();
        },
        error => console.log(error));
  }
  }
  selectData(item : Agent) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }

}
