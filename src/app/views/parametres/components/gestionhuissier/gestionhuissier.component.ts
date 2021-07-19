import { Component, OnInit ,Inject} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { HuissierService } from '../../service/huissier.service';
import { SourceDeclareHuissierService } from '../../service/sourcedeclarehuissier.service';
import { AccidentService } from '../../service/accident.service';
import { SecuriteService } from '../../service/securite.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-gestionhuissier',
  templateUrl: './gestionhuissier.component.html',
  styleUrls: ['./gestionhuissier.component.css']
})
export class GestionHuissierComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  public accidents;
  public sourcedeclarehuissiers;
  public securites;
  huissier;
  page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
  constructor(public crudApia: AccidentService,public crudApisdh: SourceDeclareHuissierService,public crudApis: SecuriteService,public crudApi: HuissierService ,public fb: FormBuilder,public toastr: ToastrService,
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
    this.crudApisdh.getSourceDeclareHuissiers().subscribe(
      sourcedeclarehuissiers => {
        this.sourcedeclarehuissiers = sourcedeclarehuissiers;
      },
      error => this.error = <any>error
    );
    this.crudApis.getSecurites().subscribe(
      securites => {
        this.securites = securites;
      },
      error => this.error = <any>error
    );
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit  Huissier';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            number: res.number,
            dateHuissier: res.dateHuissier,
            heureHuissier: res.heureHuissier,
            idaccident: res.accident.id,
            idsourcedeclarehuissier: res.sourcedeclarehuissier.id,
            idsecurite: res.securite.id,
            
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create  Huissier';
    }
   this.infoForm();
    
    
  }
  
  retrieveHuissier(): void {
    let p = this.page1-1;
    
    this.crudApi.getHuissiersPagination( p, this.pageSize1).subscribe(
      response =>{this.huissier = response;
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
      number: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.numeric()
        ]})]],
      dateHuissier: ['', [ RxwebValidators.required()]],
      heureHuissier: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.time()
        ]})]],
      idaccident: ['', [ RxwebValidators.required()]],
      idsourcedeclarehuissier: ['', [ RxwebValidators.required()]],
      idsecurite: ['', [ RxwebValidators.required()]],
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
        number: [''],
        dateHuissier: [''],
        heureHuissier: [''],
        idaccident: [''],
        idsourcedeclarehuissier: [''],
        idsecurite: [''],
          });
      }
  
      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.huissier = response;}
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
    const huissier = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,huissier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveHuissier();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionhuissier']); 
        });
      } else {
        this.crudApi.createData(huissier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveHuissier();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionhuissier']); 
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
