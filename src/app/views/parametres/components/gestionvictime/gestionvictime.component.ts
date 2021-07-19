import { Component, OnInit ,Inject, Input} from '@angular/core';
import { VictimeService} from '../../service/victime.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { VictimeComponent } from './victime.component';

@Component({
  selector: 'app-gestionvictime',
  templateUrl: './gestionvictime.component.html',
  styleUrls: ['./gestionvictime.component.css']
})
export class GestionVictimeComponent implements OnInit {
  victimes;
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
  constructor(public crudApi: VictimeService ,public fb: FormBuilder,public toastr: ToastrService,
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
    this.getData();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Victime';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            nameVictime: res.nameVictime,
            lastNameVictime: res.lastNameVictime,
            corpBlesser: res.corpBlesser,
            niveauBlessure: res.niveauBlessure,
            etatVictime: res.etatVictime,
            typeVictime: res.typeVictime,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Victime';
    }
   this.infoForm();
    
    
  }
  
  retrieveVictimes(): void {
    let p = this.page1-1;
    
    this.crudApi.getVictimePagination( p, this.pageSize1).subscribe(
      response =>{this.victimes = response;
        this.crudApi.getAll().subscribe(
         
          r =>{
            console.log(r.length);
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
      response =>{this.victimes = response;}
     );
   
  }  
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
          id: [''],
          nameVictime: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alpha()
          ]})]],
          lastNameVictime: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alpha()
          ]})]],
          corpBlesser:  ['', [ RxwebValidators.compose({
            validators:[
            RxwebValidators.required(),
            RxwebValidators.pattern({expression:{'corpBlesser': /^[a-zA-Z]+[ ]?([a-zA-Z0-9]+[ ]?)?[a-zA-Z0-9]+$/} })
            ]})]],
          niveauBlessure:  ['', [ RxwebValidators.compose({
            validators:[
            RxwebValidators.required(),
            RxwebValidators.pattern({expression:{'niveauBlessure': /^[a-zA-Z]+[ ]?([a-zA-Z0-9]+[ ]?)?[a-zA-Z0-9]+$/} })
            ]})]],
          etatVictime: ['', [RxwebValidators.required()]],
          typeVictime: ['', [RxwebValidators.required()]],
       
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
            id: [''],
            nameVictime: [''],
            lastNameVictime: [''],
            corpBlesser:  [''],
            niveauBlessure: [''],
            etatVictime: [''],
            typeVictime: [''],
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
    const victime = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,victime).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveVictimes();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionvictime']); 
          
        });
      } else {
        this.crudApi.createData(victime).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveVictimes();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionvictime']); 
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
