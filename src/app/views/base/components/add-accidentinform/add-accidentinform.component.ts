import { Component, OnInit ,Inject} from '@angular/core';
import { AccidentInformService} from '../../service/accidentinform.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AccidentService } from '../../service/accident.service';
import {SourceInfoService } from '../../service/sourceinfo.service';

@Component({
  selector: 'app-add-accidentinform',
  templateUrl: './add-accidentinform.component.html',
  styleUrls: ['./add-accidentinform.component.css']
})
export class AddAccidentInformComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public accidents;
  public sourceinforms;
  dateInformation: FormControl;
  heureInformation: FormControl;
  description: FormControl;
  public accidentinforms;
  public message: string;
  constructor(public crudApi: AccidentInformService,public crudApia: AccidentService,public crudApis: SourceInfoService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApia.getAll().subscribe(
      accidents => {
        this.accidents = accidents;
      },
      error => this.error = <any>error
    );

    this.crudApis.getAll().subscribe(
      sourceinforms => {
        this.sourceinforms= sourceinforms;
      },
      error => this.error = <any>error
    );
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Accident Inform';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            idaccident: res.accident.id,
            idsourceinform: res.sourceinform.id,
            dateInformation: res.dateInformation,
            heureInformation: res.heureInformation,
            description: res.description,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Accident Inform';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      idaccident: ['', [Validators.required]],
      idsourceinform: ['', [Validators.required]],
      dateInformation: ['', [Validators.required]],
      heureInformation: ['', [Validators.required]],
      description: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const accidentinform = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,accidentinform).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/accidentinforms']); 
        });
      } else {
        this.crudApi.createData(accidentinform).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/accidentinforms']); 
        });
      }
}
}
