import { Component, OnInit ,Inject} from '@angular/core';
import { AccidentTransportService} from '../../service/accidenttransport.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AccidentService } from '../../service/accident.service';
import {MoyenTransportService } from '../../service/moyentransport.service';

@Component({
  selector: 'app-add-accidenttransport',
  templateUrl: './add-accidenttransport.component.html',
  styleUrls: ['./add-accidenttransport.component.css']
})
export class AddAccidentTransportComponent  implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public accidents;
  public moyentransports;
  public accidenttransports;
  public message: string;
  constructor(public crudApi: AccidentTransportService,public crudApia: AccidentService,public crudApit: MoyenTransportService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApia.getAll().subscribe(
      accidents => {
        this.accidents = accidents;
      },
      error => this.error = <any>error
    );

    this.crudApit.getAll().subscribe(
      moyentransports => {
        this.moyentransports= moyentransports;
      },
      error => this.error = <any>error
    );
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Accident Transport';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            idaccident: res.accident.id,
            idtransport: res.moyentransport.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Accident Transport';
    }
   this.infoForm();
    
    
  }
  

   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        idaccident: ['', [Validators.required]],
        idtransport: ['', [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    const accidenttransport = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,accidenttransport ).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/accidenttransports']); 
        });
      } else {
        this.crudApi.createData(accidenttransport).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.router.navigate(['/base/accidenttransports']); 
        });
      }
}
}
