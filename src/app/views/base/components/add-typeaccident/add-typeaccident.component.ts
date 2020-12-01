import { Component, OnInit ,Inject} from '@angular/core';
import { TypeAccidentService} from '../../service/typeaccident.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import {TypeAccident} from '../../model/typeaccident';
import { SousTypeAccidentService } from '../../service/soustypeaccident.service';
import { SousTypeAccident } from '../../model/soustypeaccident';
@Component({
  selector: 'app-add-typeaccident',
  templateUrl: './add-typeaccident.component.html',
  styleUrls: ['./add-typeaccident.component.css']
})
export class AddTypeAccidentComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public sousTypeAccidents;
  constructor(public crudApi: TypeAccidentService,public crudApist: SousTypeAccidentService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit  Type Accident';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            label: res.label,
            alias: res.alias,
            
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create   Type Accident';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        label: ['', [Validators.required]],
        alias: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const typeaccident = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,typeaccident).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/typeaccidents']); 
        });
      } else {
        this.crudApi.createData(typeaccident).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/typeaccidents']); 
        });
      }
}
}
