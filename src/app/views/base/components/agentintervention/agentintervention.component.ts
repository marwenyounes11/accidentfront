import { Component, OnInit ,Inject} from '@angular/core';
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

  public agentinterventions;
  constructor(public crudApi: AgentInterventionService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
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
          this.getData();
        },
        error => console.log(error));
  }
  }
  selectData(item ) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }

}
