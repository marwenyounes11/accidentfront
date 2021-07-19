import { Component, OnInit ,Inject} from '@angular/core';
import { AccidentInformService} from '../../service/accidentinform.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AccidentService } from '../../service/accident.service';
import {SourceInfoService } from '../../service/sourceinfo.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { DegatTransportComponent } from '../gestiondegattransport/degattransport.component';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-gestionaccidentinform',
  templateUrl: './gestionaccidentinform.component.html',
  styleUrls: ['./gestionaccidentinform.component.css']
})
export class GestionAccidentInformComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public accidents;
  public sourceinforms;
 
 accidentinforms;
  ainforms;
  motcle1 = '';
 page1=1 ;
  count1 ;
 pageSize1 = 2;
  submitted = false;
  public message: string;
  public notif={
    subject: '',
    text:''
  }
  constructor(public crudApin: NotificationService,public crudApi: AccidentInformService,public crudApia: AccidentService,public crudApis: SourceInfoService ,public fb: FormBuilder,public toastr: ToastrService,
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

  retrieveAccidentInform(): void {
    let p = this.page1-1;
    
    this.crudApi.getAccidentsInformPagination( p, this.pageSize1).subscribe(
      response =>{this.accidentinforms = response;
        
        this.crudApi.getAccidentsInform().subscribe(
         
          r =>{this.ainforms = r;
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

  ngOnInit() {
   
    this.crudApia.getAccidents().subscribe(
      accidents => {
        this.accidents = accidents;
      },
      error => this.error = <any>error
    );

    this.crudApis.getAll().subscribe(
      sourceinforms => {
        this.sourceinforms= sourceinforms;
      },
      error => this.error = <any>error
    );
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Accident Inform';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            idaccident: res.accident.id,
            idsourceinform: res.sourceinform.id,
            dateInformation: res.dateInformation,
            heureInformation: res.heureInformation,
            description: res.description,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Accident Inform';
    }
   this.infoForm();
    
    
  }
  
  
   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      idaccident: ['', [ RxwebValidators.required()]],
      idsourceinform:['', [ RxwebValidators.required()]],
      dateInformation: ['', [ RxwebValidators.required()]],
      heureInformation:  ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.time()
        ]})]],
        description:['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'regex': /^([a-zA-Z]+[ ]?)+[a-zA-Z]+$/} })
          ]})]],
        });
    }
   
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
        idaccident:  [''],
        idsourceinform: [''],
        dateInformation: [''],
        heureInformation: [''],
        description: [''],
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
   
    const accidentinform = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,accidentinform).subscribe( data => {
          let dinfo=new Date(this.crudApi.dataForm.controls.dateInformation.value);
          let dateinfo = dinfo.getFullYear()+'-'+(dinfo.getMonth()+1)+'-'+dinfo.getDate();
          
         
          this.crudApia.getAccident(this.crudApi.dataForm.controls.idaccident.value).subscribe(
            res => {
           let  da= res.dateAccident.toString();
             let d =new Date(da);
             let dateacc = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
          let y=dinfo.getFullYear()-d.getFullYear();
          let m=dinfo.getMonth()+1-d.getMonth()+1;
          let day=dinfo.getDate()-d.getDate();
          console.log(dateinfo);
          console.log(dateacc);
          if(dateinfo>=dateacc){
           this.notif.subject="Retard Information";
           this.notif.text="il ya un retard d'information de " + y+ "années et de " + m + "mois et de " + day+ "jour";
            this.crudApin.createData(this.notif).subscribe( data => {
             
            });
          }
              });
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveAccidentInform();
          this.initForm();
          
        });
      } else {
        this.crudApi.createData(accidentinform).subscribe( data => {
          let dinfo=new Date(this.crudApi.dataForm.controls.dateInformation.value);
          let dateinfo = dinfo.getFullYear()+'-'+(dinfo.getMonth()+1)+'-'+dinfo.getDate();
          
         
          this.crudApia.getAccident(this.crudApi.dataForm.controls.idaccident.value).subscribe(
            res => {
           let  da= res.dateAccident.toString();
             let d =new Date(da);
             let dateacc = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
          let y=dinfo.getFullYear()-d.getFullYear();
          let m=dinfo.getMonth()+1-d.getMonth()+1;
          let day=dinfo.getDate()-d.getDate();
          console.log(dateinfo);
          console.log(dateacc);
          if(dateinfo>=dateacc){
           this.notif.subject="Retard Information";
           this.notif.text="il ya un retard d'information de " + y+ "années et de " + m + "mois et de " + day+ "jour";
            this.crudApin.createData(this.notif).subscribe( data => {
             
            });
          }
              });
          
          this.toastr.success( 'Validation Faite avec Success');
          this.initForm();
          this.retrieveAccidentInform();
         
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
