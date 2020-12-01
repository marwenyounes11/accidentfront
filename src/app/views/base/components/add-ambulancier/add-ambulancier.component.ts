import { Component, OnInit ,Inject} from '@angular/core';
import { AmbulancierService} from '../../service/ambulancier.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { SourceInfoService } from '../../service/sourceinfo.service';

@Component({
  selector: 'app-add-ambulancier',
  templateUrl: './add-ambulancier.component.html',
  styleUrls: ['./add-ambulancier.component.css']
})
export class AddAmbulancierComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public sourceinforms;
  constructor(public crudApi: AmbulancierService ,public crudApis: SourceInfoService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApis.getAll().subscribe(
      sourceinforms => {
        this.sourceinforms= sourceinforms;
      },
      error => this.error = <any>error
    );
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit ambulancier';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            name: res.name,
            lastName: res.lastName,
            matricule: res.matricule,
            phone: res.phone,
            idsourceinform: res.sourceinform.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create ambulancier';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        matricule: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        idsourceinform: ['', [Validators.required]],
       
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const ambulancier = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,ambulancier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/ambulanciers']); 
        });
      } else {
        this.crudApi.createData(ambulancier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/ambulanciers']); 
        });
      }
}

}
