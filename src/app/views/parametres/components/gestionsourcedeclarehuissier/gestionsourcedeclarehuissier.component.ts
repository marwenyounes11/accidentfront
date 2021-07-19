import { Component, OnInit ,Inject} from '@angular/core';
import { SourceDeclareHuissierService} from '../../service/sourcedeclarehuissier.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-gestionsourcedeclarehuissier',
  templateUrl: './gestionsourcedeclarehuissier.component.html',
  styleUrls: ['./gestionsourcedeclarehuissier.component.css']
})
export class GestionSourceDeclareHuissierComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  sourcedeclarehuissier;
  page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
  constructor(public crudApi: SourceDeclareHuissierService ,public fb: FormBuilder,public toastr: ToastrService,
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
      this.pageTitle = 'Edit Source Declare Huissier';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            name: res.name,
            lastName: res.lastName,
            matricule: res.matricule,
            phone: res.phone,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Source Declare Huissier';
    }
   this.infoForm();
    
    
  }
  

  retrieveSourceDeclareHuissiers(): void {
    let p = this.page1-1;
    
    this.crudApi.getSourceDeclareHuissierPagination( p, this.pageSize1).subscribe(
      response =>{this.sourcedeclarehuissier = response;
        this.crudApi.getSourceDeclareHuissiers().subscribe(
         
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
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
        name: [''],
        lastName: [''],
        matricule: [''],
        phone: [''],
          });
      }
     
  
      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.sourcedeclarehuissier = response;}
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
   
    const sourcedeclarehuissier = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,sourcedeclarehuissier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveSourceDeclareHuissiers();
          this.initForm();
        });
      } else {
        this.crudApi.createData(sourcedeclarehuissier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveSourceDeclareHuissiers();
          this.initForm();
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
