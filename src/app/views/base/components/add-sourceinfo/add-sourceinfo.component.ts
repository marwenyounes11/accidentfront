import { Component, OnInit ,Inject} from '@angular/core';
import { SourceInfoService} from '../../service/sourceinfo.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import {SourceInfo} from '../../model/sourceinfo';
@Component({
  selector: 'app-add-sourceinfo',
  templateUrl: './add-sourceinfo.component.html',
  styleUrls: ['./add-sourceinfo.component.css']
})
export class AddSourceInfoComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  constructor(public crudApi: SourceInfoService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Source Info';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            name: res.name,
            lastName: res.lastName,
            nature: res.nature,
            phone: res.phone,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Source Info';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        nature: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const sourceinfo = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,sourceinfo).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/sourceinfos']); 
        });
      } else {
        this.crudApi.createData(sourceinfo).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/sourceinfos']); 
        });
      }
}
}
