import { Component, OnInit ,Inject} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { HuissierService } from '../../service/huissier.service';
import { SourceDeclareHuissierService } from '../../service/sourcedeclarehuissier.service';
import { AccidentService } from '../../service/accident.service';
import { SecuriteService } from '../../service/securite.service';
@Component({
  selector: 'app-add-huissier',
  templateUrl: './add-huissier.component.html',
  styleUrls: ['./add-huissier.component.css']
})
export class AddHuissierComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public accidents;
  public sourcedeclarehuissiers;
  public securites;
  constructor(public crudApia: AccidentService,public crudApisdh: SourceDeclareHuissierService,public crudApis: SecuriteService,public crudApi: HuissierService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApia.getAll().subscribe(
      accidents => {
        this.accidents = accidents;
      },
      error => this.error = <any>error
    );
    this.crudApisdh.getAll().subscribe(
      sourcedeclarehuissiers => {
        this.sourcedeclarehuissiers = sourcedeclarehuissiers;
      },
      error => this.error = <any>error
    );
    this.crudApis.getAll().subscribe(
      securites => {
        this.securites = securites;
      },
      error => this.error = <any>error
    );
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit  Huissier';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            number: res.number,
            dateHuissier: res.dateHuissier,
            heureHuissier: res.heureHuissier,
            idaccident: res.accident.id,
            idsourcedeclarehuissier: res.sourcedeclarehuissier.id,
            idsecurite: res.securite.id,
            
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create  Huissier';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      number: ['', [Validators.required]],
      dateHuissier: ['', [Validators.required]],
      heureHuissier: ['', [Validators.required]],
      idaccident: ['', [Validators.required]],
      idsourcedeclarehuissier: ['', [Validators.required]],
      idsecurite: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const huissier = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,huissier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/huissiers']); 
        });
      } else {
        this.crudApi.createData(huissier).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/huissiers']); 
        });
      }
}
}
