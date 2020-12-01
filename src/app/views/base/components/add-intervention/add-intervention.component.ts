import { Component, OnInit ,Inject} from '@angular/core';
import { InterventionService} from '../../service/intervention.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AgentInterventionService } from '../../service/agentintervention.service';
import {MaterielService } from '../../service/materiel.service';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.css']
})
export class AddInterventionComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public materiels;
  public agentinterventions;
  public interventions;
  public message: string;
  constructor(public crudApi: InterventionService,public crudApia: AgentInterventionService,public crudApim: MaterielService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApia.getAll().subscribe(
      agentinterventions => {
        this.agentinterventions = agentinterventions;
      },
      error => this.error = <any>error
    );

    this.crudApim.getMateriels().subscribe(
     materiels => {
        this.materiels= materiels;
      },
      error => this.error = <any>error
    );
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit intervention';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            idagentintervention: res.agentintervention.id,
            idmateriel: res.materiel.id,
            dateIntervention: res.dateIntervention,
            heureIntervention: res.heureIntervention,
            action: res.action,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create intervention';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      idagentintervention: ['', [Validators.required]],
      idmateriel: ['', [Validators.required]],
      dateIntervention: ['', [Validators.required]],
      heureIntervention: ['', [Validators.required]],
      action: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const intervention = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,intervention).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/interventions']); 
        });
      } else {
        this.crudApi.createData(intervention).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/interventions']); 
        });
      }
}
}
