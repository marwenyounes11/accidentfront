import { Component, OnInit ,Inject} from '@angular/core';
import { InterventionService} from '../../service/intervention.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AgentInterventionService } from '../../service/agentintervention.service';
import {MaterielService } from '../../service/materiel.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-gestionintervention',
  templateUrl: './gestionintervention.component.html',
  styleUrls: ['./gestionintervention.component.css']
})
export class GestionInterventionComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public materiels;
  public agentinterventions;
  public interventions;
  page1=1 ;
  count1 ;
  pageSize1 = 2;
  public message: string;
  submitted = false;
  constructor(public crudApi: InterventionService,public crudApia: AgentInterventionService,public crudApim: MaterielService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
    isCollapsed1: boolean = false;
    isCollapsed2: boolean = false;
    iconCollapse: string = 'icon-arrow-up';
    isClose1: boolean = false;
    isClose2: boolean = false;
    collapsed(event: any): void {
      // console.log(event);
    }
  
    expanded(event: any): void {
      // console.log(event);
    }
  
    toggleCollapse1(): void {
      this.isCollapsed1 = !this.isCollapsed1;
      this.iconCollapse = this.isCollapsed1 ? 'icon-arrow-down' : 'icon-arrow-up';
    }
    toggleCollapse2(): void {
      this.isCollapsed2 = !this.isCollapsed2;
      this.iconCollapse = this.isCollapsed2 ? 'icon-arrow-down' : 'icon-arrow-up';
    }
    get f() { return this.crudApi.dataForm.controls; }
  ngOnInit() {
    this.crudApia.getAgentInterventions().subscribe(
      agentinterventions => {
        this.agentinterventions = agentinterventions;
      },
      error => this.error = <any>error
    );

    this.crudApim.getData().subscribe(
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
  
  retrieveIntervention(): void {
    let p = this.page1-1;
    
    this.crudApi.getInterventionsPagination( p, this.pageSize1).subscribe(
      response =>{this.interventions = response;
        this.crudApi.getInterventions().subscribe(
         
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

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      idagentintervention: ['', [ RxwebValidators.required()]],
      idmateriel:['', [ RxwebValidators.required()]],
      dateIntervention: ['', [ RxwebValidators.required()]],
      heureIntervention: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.time()
        ]})]],
      action: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.alpha()
        ]})]],
        });
    }
   
    initForm() {
      this.crudApi.dataForm = this.fb.group({
          id: [''],
          idagentintervention: [''],
          idmateriel:[''],
          dateIntervention:[''],
          heureIntervention: [''],
          action: [''],
         
          });
      }

    ResetForm() {
      this.submitted = false;
        this.crudApi.dataForm.reset();
    }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.crudApi.dataForm.invalid) {
        return;
    }
   
    const intervention = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,intervention).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveIntervention();
          this.initForm();
          this.router.navigate(['/home/equipement/gestionintervention']); 
        });
      } else {
        this.crudApi.createData(intervention).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveIntervention();
          this.initForm();
          this.router.navigate(['/home/equipement/gestionintervention']); 
        });
      }
}

close1() {
  this.isClose1 = !this.isClose1;
  const card = document.getElementById('id1');
  if (this.isClose1 )
  {
  card.style.display = "none";
  
}
}
  
close2() {
  this.isClose2 = !this.isClose2;
  const card = document.getElementById('id2');
  if (this.isClose2 )
  {
  card.style.display = "none";
  
}
}
}
