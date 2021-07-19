import { Component, OnInit ,Inject} from '@angular/core';
import { AgentService} from '../../service/agent.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { Agent} from '../../model/agent';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-gestionagent',
  templateUrl: './gestionagent.component.html',
  styleUrls: ['./gestionagent.component.css']
})
export class GestionAgentComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  agents;
  page1=1 ;
   count1 ;
   pageSize1 = 2;
  constructor(public crudApi: AgentService ,public fb: FormBuilder,public toastr: ToastrService,
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Agent';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            name: res.name,
            lastName: res.lastName,
            address: res.address,
            email: res.email,
            matricule: res.matricule,
            phone: res.phone,
            type: res.type,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Agent';
    }
   this.infoForm();
    
    
  }
  

  retrieveAgent(): void {
    let p = this.page1-1;
    
    this.crudApi.getAgentsPagination( p, this.pageSize1).subscribe(
      response =>{this.agents = response;
        this.crudApi.getAgents().subscribe(
         
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
        name: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alpha()
          ]})]],
        lastName: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alpha()
          ]})]],
        address:['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'address': /^(\d+)(.*)(.*)$/} }),
          ]})]],
          email:['',[ RxwebValidators.compose({
            validators:[
            RxwebValidators.required(),
            RxwebValidators.email()
            ]})]],
        matricule: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alphaNumeric()
          ]})]],
        phone: ['',[ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'onlyDigit': /^\d{2}\d{3}\d{3}$/} })
          ]})]],
        type: ['', [RxwebValidators.required()]],
       
        });
    }
   
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
          name: [''],
          lastName:[''],
          address:[''],
            email:[''],
          matricule: [''],
          phone: [''],
          type: [''],
         
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
    const agent = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,agent).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveAgent();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionagent']); 
        });
      } else {
        this.crudApi.createData(agent).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveAgent();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionagent']); 
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
