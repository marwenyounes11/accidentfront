import { Component, OnInit ,Inject} from '@angular/core';
import { AccidentTransportService} from '../../service/accidenttransport.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AccidentService } from '../../service/accident.service';
import {MoyenTransportService } from '../../service/moyentransport.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-gestionaccidenttransport',
  templateUrl: './gestionaccidenttransport.component.html',
  styleUrls: ['./gestionaccidenttransport.component.css']
})
export class GestionAccidentTransportComponent  implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public accidents;
  public moyentransports;
  public accidenttransports;
  public message: string;
  submitted = false;
  atransports;
   page1=1 ;
   count1 ;
   pageSize1 = 2;
  constructor(public crudApi: AccidentTransportService,public crudApia: AccidentService,public crudApit: MoyenTransportService ,public fb: FormBuilder,public toastr: ToastrService,
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
    this.crudApia.getAccidents().subscribe(
      accidents => {
        this.accidents = accidents;
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
      this.pageTitle = 'Edit Accident Transport';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            idaccident: res.accident.id,
            idtransport: res.moyentransport.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Accident Transport';
    }
   this.infoForm();
    
    
  }

  retrieveAccidentTransport(): void {
    let p = this.page1-1;
    
    this.crudApi.getAccidentsTransportPagination( p, this.pageSize1).subscribe(
      response =>{this.accidenttransports = response;
        this.crudApi.getAccidentsTransport().subscribe(
         
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

  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.accidenttransports= response;}
     );
   
  }
   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        idaccident: ['', [ RxwebValidators.required()]],
        idtransport: ['', [ RxwebValidators.required()]],
        });
    }
   
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
          idaccident: [''],
          idtransport: [''],
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
    const accidenttransport = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,accidenttransport ).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveAccidentTransport();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionaccidenttransport']); 
        });
      } else {
        this.crudApi.createData(accidenttransport).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveAccidentTransport();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionaccidenttransport']); 
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
