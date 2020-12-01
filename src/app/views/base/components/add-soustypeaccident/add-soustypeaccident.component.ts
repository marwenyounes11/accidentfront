import { Component, OnInit ,Inject} from '@angular/core';
import { SousTypeAccidentService} from '../../service/soustypeaccident.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import {SousTypeAccident} from '../../model/soustypeaccident';
import { TypeAccidentService } from '../../service/typeaccident.service';

@Component({
  selector: 'app-add-soustypeaccident',
  templateUrl: './add-soustypeaccident.component.html',
  styleUrls: ['./add-soustypeaccident.component.css']
})
export class AddSousTypeAccidentComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public typeAccidents;
  constructor(public crudApi: SousTypeAccidentService ,public crudApist: TypeAccidentService,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApist.getAll().subscribe(
      typeaccidents=> {
        this.typeAccidents= typeaccidents;
      },
      error => this.error = <any>error
    );
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Sous Type Accident';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            label: res.label,
            alias: res.alias,
            idtypeaccident: res.typeaccident.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create  Sous Type Accident';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        label: ['', [Validators.required]],
        alias: ['', [Validators.required]],
        idtypeaccident: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const soustypeaccident = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,soustypeaccident).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/soustypeaccidents']); 
        });
      } else {
        this.crudApi.createData(soustypeaccident).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/soustypeaccidents']); 
        });
      }
}
}
