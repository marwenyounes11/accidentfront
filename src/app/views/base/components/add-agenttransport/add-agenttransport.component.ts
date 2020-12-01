import { Component, OnInit ,Inject} from '@angular/core';
import { AgentTransportService} from '../../service/agenttransport.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AgentService } from '../../service/agent.service';
import {MoyenTransportService } from '../../service/moyentransport.service';

@Component({
  selector: 'app-add-agenttransport',
  templateUrl: './add-agenttransport.component.html',
  styleUrls: ['./add-agenttransport.component.css']
})
export class AddAgentTransportComponent  implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public agents;
  public moyentransports;
  public agenttransports;
  public message: string;
  constructor(public crudApi: AgentTransportService,public crudApia: AgentService,public crudApit: MoyenTransportService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApia.getAll().subscribe(
      agents => {
        this.agents = agents;
      },
      error => this.error = <any>error
    );

    this.crudApit.getAll().subscribe(
      moyentransports => {
        this.moyentransports= moyentransports;
      },
      error => this.error = <any>error
    );
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Agent Transport';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            idagent: res.agent.id,
            idtransport: res.moyentransport.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Agent Transport';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        idagent: ['', [Validators.required]],
        idtransport: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const agenttransport = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,agenttransport ).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/agenttransports']); 
        });
      } else {
        this.crudApi.createData(agenttransport).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/agenttransports']); 
        });
      }
}
}
