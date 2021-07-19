import { Component, OnInit ,Inject, Input} from '@angular/core';
import { AgentInterventionService} from '../../service/agentintervention.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Component({
  selector: 'app-agentintervention',
  templateUrl: './agentintervention.component.html',
  styleUrls: ['./agentintervention.component.css']
})
export class AgentInterventionComponent implements OnInit {
  motcle1 = '';
  @Input() page1=1 ;
  @Input() count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  @Input() agentinterventions;
  constructor(public crudApi: AgentInterventionService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
    ngOnInit() {
      this.retrieveAgentIntervention();
    }
    retrieveAgentInterventionMc(): void {
      let p = this.page1-1;
      
      this.crudApi.getAgentInterventionsPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
        response =>{this.agentinterventions = response;
          this.crudApi.getAgentInterventions().subscribe(
           
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
  
    retrieveAgentIntervention(): void {
      let p = this.page1-1;
      
      this.crudApi.getAgentInterventionsPagination( p, this.pageSize1).subscribe(
        response =>{this.agentinterventions = response;
          this.crudApi.getAgentInterventions().subscribe(
           
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
      this.retrieveAgentIntervention();
    }
  
    handlePageSizeChange1(event): void {
      this.pageSize1 = event.target.value;
      this.retrieveAgentIntervention();
    }
    
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.agentinterventions = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this agent ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveAgentIntervention();
        },
        error => console.log(error));
  }
  }
  selectData(item ) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }

}
