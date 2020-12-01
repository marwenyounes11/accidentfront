import { Component, OnInit ,Inject} from '@angular/core';
import { SecuriteService} from '../../service/securite.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { SourceInfoService } from '../../service/sourceinfo.service';

@Component({
  selector: 'app-add-securite',
  templateUrl: './add-securite.component.html',
  styleUrls: ['./add-securite.component.css']
})
export class AddSecuriteComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public sourceinforms;
  constructor(public crudApi: SecuriteService ,public crudApis: SourceInfoService ,public fb: FormBuilder,public toastr: ToastrService,
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
      this.pageTitle = 'Edit Securite';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            type: res.type,
            adress: res.adress,
            idsourceinform: res.sourceinform.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Securite';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: [''],
        type: ['', [Validators.required]],
        adress: ['', [Validators.required]],
        idsourceinform: ['', [Validators.required]],
       
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const securite = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,securite).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/securites']); 
        });
      } else {
        this.crudApi.createData(securite).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/securites']); 
        });
      }
}

}
