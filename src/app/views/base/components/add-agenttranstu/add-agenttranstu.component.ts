import { Component, OnInit ,Inject} from '@angular/core';
import { AgentTranstuService} from '../../service/agenttranstu.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { SourceInfoService } from '../../service/sourceinfo.service';

@Component({
  selector: 'app-add-agenttranstu',
  templateUrl: './add-agenttranstu.component.html',
  styleUrls: ['./add-agenttranstu.component.css']
})
export class AddAgentTranstuComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public sourceinforms;
  constructor(public crudApi: AgentTranstuService ,public crudApis: SourceInfoService ,public fb: FormBuilder,public toastr: ToastrService,
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
      this.pageTitle = 'Edit Agent Transtu';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            function: res.function,
            name: res.name,
            lastName: res.lastName,
            matricule: res.matricule,
            phone: res.phone,
            idsourceinform: res.sourceinform.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Agent Transtu';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: [''],
        function: ['', [Validators.required]],
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
   
    const agenttranstu = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,agenttranstu).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/agenttranstus']); 
        });
      } else {
        this.crudApi.createData(agenttranstu).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/agenttranstus']); 
        });
      }
}

}
