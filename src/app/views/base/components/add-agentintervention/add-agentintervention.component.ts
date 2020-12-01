import { Component, OnInit ,Inject} from '@angular/core';
import { AgentInterventionService} from '../../service/agentintervention.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-add-agentintervention',
  templateUrl: './add-agentintervention.component.html',
  styleUrls: ['./add-agentintervention.component.css']
})
export class AddAgentInterventionComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  constructor(public crudApi: AgentInterventionService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Agent intervention';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            name: res.name,
            lastName: res.lastName,
            email: res.email,
            matricule: res.matricule,
            phone: res.phone,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Agent intervention';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        matricule: ['', [Validators.required]],
        phone: ['', [Validators.required]],
       
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const agentintervention = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,agentintervention).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/agentinterventions']); 
        });
      } else {
        this.crudApi.createData(agentintervention).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/agentinterventions']); 
        });
      }
}

}
