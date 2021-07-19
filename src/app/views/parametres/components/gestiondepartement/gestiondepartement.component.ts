import { Component, OnInit ,Inject} from '@angular/core';
import { DepartementService} from '../../service/departement.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { LieuxAccidentService } from '../../service/lieuxaccident.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-gestiondepartement',
  templateUrl: './gestiondepartement.component.html',
  styleUrls: ['./gestiondepartement.component.css']
})
export class GestionDepartementComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  public lieuxAccidents;
  departements;
   page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
  constructor(public crudApi: DepartementService ,public crudApil: LieuxAccidentService,public fb: FormBuilder,public toastr: ToastrService,
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
    this.crudApil.getAll().subscribe(
      lieuxaccidents => {
        this.lieuxAccidents = lieuxaccidents;
      },
      error => this.error = <any>error
    );
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Departement';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            nameDepartement: res.nameDepartement,
            idlieux: res.lieux.id
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Departement';
    }
   this.infoForm();
    
    
  }
  
  retrieveDepartement(): void {
    let p = this.page1-1;
    
    this.crudApi.getDepartementsPagination( p, this.pageSize1).subscribe(
      response =>{this.departements = response;
        this.crudApi.getDepartements().subscribe(
         
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
      nameDepartement: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{'name': /^([a-zA-Z]+[ ]?)+[a-zA-Z]+$/} })
        ]})]],
      idlieux:['', [RxwebValidators.required()]],
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
        nameDepartement: [''],
        idlieux: [''],
          });
      }
 

      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.departements = response;}
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
   
    const departement = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,departement).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveDepartement();
          this.initForm();
          this.router.navigate(['/home/parametres/gestiondepartement']); 
        });
      } else {
        this.crudApi.createData(departement).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveDepartement();
          this.initForm();
          this.router.navigate(['/home/parametres/gestiondepartement']); 
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
