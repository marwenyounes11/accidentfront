import { Component, OnInit ,Inject} from '@angular/core';
import { DepartementService} from '../../service/departement.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { LieuxAccidentService } from '../../service/lieuxaccident.service';


@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public lieuxAccidents;
  constructor(public crudApi: DepartementService ,public crudApil: LieuxAccidentService,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApil.getAll().subscribe(
      lieuxaccidents => {
        this.lieuxAccidents = lieuxaccidents;
      },
      error => this.error = <any>error
    );
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Departement';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            nameDepartement: res.nameDepartement,
            idlieux: res.lieux.id
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Departement';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      nameDepartement: ['', [Validators.required]],
      idlieux:[''],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const departement = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,departement).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/departements']); 
        });
      } else {
        this.crudApi.createData(departement).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/departements']); 
        });
      }
}
  

}
