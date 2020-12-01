import { Component, OnInit ,Inject} from '@angular/core';
import { DegatService} from '../../service/degat.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AccidentService } from '../../service/accident.service';
import { Accident } from '../../model/accident';

@Component({
  selector: 'app-add-degatmateriel',
  templateUrl: './add-degatmateriel.component.html',
  styleUrls: ['./add-degatmateriel.component.css']
})
export class AddDegatMaterielComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  accidents:Accident[];
  public message: string;
  constructor(public crudApi: DegatService,public crudApia: AccidentService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApia.getAll().subscribe(
      accidents => {
        this.accidents = accidents;
      },
      error => this.error = <any>error
    );
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Degat Materiel';
      this.crudApi.getDegat(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            value: res.value,
            description: res.description,
            idAccident: res.accident.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Degat ';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: [''],
        value: ['', [Validators.required]],
        description: ['', [Validators.required]],
        idAccident: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const degat = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updateDegatMateriel(+id,degat).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/degatmateriels']); 
        });
      } else {
        this.crudApi.createDegatMateriel(degat).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/degatmateriels']); 
        });
      }
}
}
