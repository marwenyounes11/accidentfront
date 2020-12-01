import { Component, OnInit ,Inject} from '@angular/core';
import { SourceDeclareHuissierService} from '../../service/sourcedeclarehuissier.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-add-sourcedeclarehuissier',
  templateUrl: './add-sourcedeclarehuissier.component.html',
  styleUrls: ['./add-sourcedeclarehuissier.component.css']
})
export class AddSourceDeclareHuissierComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  constructor(public crudApi: SourceDeclareHuissierService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
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
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        matricule: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const sourcedeclarehuissier = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,sourcedeclarehuissier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/sourcedeclarehuissiers']); 
        });
      } else {
        this.crudApi.createData(sourcedeclarehuissier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/sourcedeclarehuissiers']); 
        });
      }
}
}
