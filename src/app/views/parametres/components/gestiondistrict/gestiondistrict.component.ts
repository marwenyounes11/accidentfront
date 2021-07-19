import { Component, OnInit ,Inject} from '@angular/core';
import { DistrictService} from '../../service/district.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-gestiondistrict',
  templateUrl: './gestiondistrict.component.html',
  styleUrls: ['./gestiondistrict.component.css']
})
export class GestionDistrictComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  districts;
  page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
  constructor(public crudApi: DistrictService ,public fb: FormBuilder,public toastr: ToastrService,
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
      this.pageTitle = 'Edit District';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            nameDistrict: res.nameDistrict,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create District';
    }
   this.infoForm();
    
    
  }
  
  retrieveDistrict(): void {
    let p = this.page1-1;
    
    this.crudApi.getDistrictsPagination( p, this.pageSize1).subscribe(
      response =>{this.districts = response;
        this.crudApi.getAll().subscribe(
         
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
      nameDistrict:  ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{'name': /^[a-zA-Z]+[ ]?([a-zA-Z0-9]+[ ]?)?[a-zA-Z0-9]+$/} })
        ]})]],
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
        nameDistrict: [''],
          });
      }
  
      
      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.districts = response;}
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
    const district = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,district).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveDistrict();
          this.initForm();
          this.router.navigate(['/home/parametres/gestiondistrict']); 
        });
      } else {
        this.crudApi.createData(district).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveDistrict();
          this.initForm();
          this.router.navigate(['/home/parametres/gestiondistrict']); 
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
