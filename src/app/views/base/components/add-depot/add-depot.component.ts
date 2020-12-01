import { Component, OnInit ,Inject} from '@angular/core';
import { DepotService} from '../../service/depot.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { Depot} from '../../model/depot';

@Component({
  selector: 'app-add-depot',
  templateUrl: './add-depot.component.html',
  styleUrls: ['./add-depot.component.css']
})
export class AddDepotComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  constructor(public crudApi: DepotService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Depot';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            nameDepot: res.nameDepot,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Depot';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      nameDepot: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const depot = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,depot).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/depots']); 
        });
      } else {
        this.crudApi.createData(depot).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/depots']); 
        });
      }
}
  

}
