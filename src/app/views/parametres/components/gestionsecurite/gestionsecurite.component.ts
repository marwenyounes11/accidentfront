import { Component, OnInit ,Inject} from '@angular/core';
import { SecuriteService} from '../../service/securite.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { SourceInfoService } from '../../service/sourceinfo.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-gestionsecurite',
  templateUrl: './gestionsecurite.component.html',
  styleUrls: ['./gestionsecurite.component.css']
})
export class GestionSecuriteComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  public sourceinforms;
  securites;
  page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
  constructor(public crudApi: SecuriteService ,public crudApis: SourceInfoService ,public fb: FormBuilder,public toastr: ToastrService,
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
    this.crudApis.getSourceInfos().subscribe(
      sourceinforms => {
        this.sourceinforms= sourceinforms;
      },
      error => this.error = <any>error
    );
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Securite';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            type: res.type,
            address: res.address,
            idsourceinform: res.sourceinform.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Securite';
    }
   this.infoForm();
    
    
  }
  
  retrieveSecurites(): void {
    let p = this.page1-1;
    
    this.crudApi.getSecuritePagination( p, this.pageSize1).subscribe(
      response =>{this.securites = response;
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
        type: ['', [RxwebValidators.required()]],
        address: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'address': /^(\d+)(.*)(.*)$/} }),
          ]})]],
        idsourceinform: ['', [RxwebValidators.required()]],
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
          id: [''],
          type: [''],
          address: [''],
          idsourceinform: [''],
          });
      }
     
      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.securites = response;}
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
   
    const securite = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,securite).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveSecurites();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionsecurite']); 
        });
      } else {
        this.crudApi.createData(securite).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveSecurites();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionsecurite']); 
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
