import { Component, OnInit ,Inject} from '@angular/core';
import { UserService} from '../../service/user.service'
import { RoleService} from '../../service/role.service'
import {UserComponent} from './user.component'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { RxwebValidators } from "@rxweb/reactive-form-validators"
import { User } from '../../formvalidation/user';

@Component({
  selector: 'app-gestionuser',
  templateUrl: './gestionuser.component.html',
  styleUrls: ['./gestionuser.component.css']
})
export class GestionUserComponent implements OnInit {
  
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public roles;
  submitted = false;
  constructor(public crudApi: UserService ,public crudApir: RoleService,public fb: FormBuilder,public toastr: ToastrService,
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

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

get f() { return this.crudApi.dataForm.controls; }

  ngOnInit() {
    this.crudApir.getAll().subscribe(
      roles => {
        this.roles = roles;
      },
      error => this.error = <any>error
    );
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()
      this.pageTitle = 'Create User';
    } else {
      this.pageTitle = 'Update User';
    }
    
    
  }
  

   
 
  infoForm() {
    let user=new User();
    this.crudApi.dataForm = this.fb.group({
        id: [''],
        name: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alpha()
          ]})]],
        username:['',[ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alphaNumeric()
          ]})]],
        email:['',[ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.email()
          ]})]],
        confirmEmail:['',[ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.compare({fieldName:'email'})
          ]})]], 
        password: ['',[ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.minLength({value:6})
          ]})]],
        confirmPassword:['',[ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.compare({fieldName:'password'})
          ]})]], 
        idrole: ['', [ RxwebValidators.required()]],
    });
    }
   
    initForm() {
      let user=new User();
      this.crudApi.dataForm = this.fb.group({
          id: [''],
          name: [''],
          username: [''],
          email: [''],
          confirmEmail: [''],
          password:  [''],
          confirmPassword: [''],
          idrole: [''],
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
        let u;
       

    const user = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        
        this.crudApi.updatedata(+id,user).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.initForm();
          this.router.navigate(['/base/gestionuser']); 
        });
      } else {
        this.crudApi.createData(user).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.initForm();
          this.router.navigate(['/base/gestionuser']); 
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
