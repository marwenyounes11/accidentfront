import { Component, OnInit ,Inject} from '@angular/core';
import { LieuxAccidentService} from '../../service/lieuxaccident.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-gestionlieuxaccident',
  templateUrl: './gestionlieuxaccident.component.html',
  styleUrls: ['./gestionlieuxaccident.component.css']
})
export class GestionLieuxAccidentComponent  {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  lieuxAccidents;
   page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
  constructor(public crudApi: LieuxAccidentService ,public fb: FormBuilder,public toastr: ToastrService,
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
      this.pageTitle = 'Edit LieuxAccident';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            longitude: res.longitude,
            latitude: res.latitude,
            emplacement: res.emplacement,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create LieuxAccident';
    }
   this.infoForm();
    
    
  }
  

  retrieveLieux(): void {
    let p = this.page1-1;
    
    this.crudApi.getLieuxPagination( p, this.pageSize1).subscribe(
      response =>{this.lieuxAccidents = response;
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
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      longitude:  ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{'longitude': /^[0-9]+[.]?[a-zA-Z0-9]+$/} })
        ]})]],
      latitude:  ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'latitude':  /^[0-9]+[.]?[a-zA-Z0-9]+$/} })
          ]})]],
      emplacement:  ['', [ RxwebValidators.compose({
            validators:[
            RxwebValidators.required(),
            RxwebValidators.pattern({expression:{'emplacement': /^[a-zA-Z]+[a-zA-Z0-9]+$/} })
            ]})]],
        });
        
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
        longitude: [''],
        latitude: [''],
        emplacement: [''],
          });
          
      }
 
      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.lieuxAccidents = response;}
         );
       
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
    const lieuxaccident= this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,lieuxaccident).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveLieux();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionlieuxaccident']); 
        });
      } else {
        this.crudApi.createData(lieuxaccident).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveLieux();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionlieuxaccident']); 
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