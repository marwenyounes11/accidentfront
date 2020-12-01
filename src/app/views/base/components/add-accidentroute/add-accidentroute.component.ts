import { Component, OnInit,Inject } from '@angular/core';
import { AccidentService} from '../../service/accident.service';
import { LieuxAccidentService} from '../../service/lieuxaccident.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { LieuxAccident} from '../../model/lieuxaccident';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-accidentroute',
  templateUrl: './add-accidentroute.component.html',
  styleUrls: ['./add-accidentroute.component.css']
})
export class AddAccidentRouteComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: String;
  wcode : string = '';
  userFile ;
  imgURL: any;
  public message: string;
  public lieuxAccidents;
      id: FormControl;
      dateAccident: FormControl;
      heureAccident: FormControl;
      description: FormControl;
      image: FormControl;
      idlieux:FormControl;
      subType:FormControl;
  constructor(public crudApi: AccidentService,public crudApil: LieuxAccidentService,public fb: FormBuilder,public toastr: ToastrService, private router : Router ,private route: ActivatedRoute,
  ) { }
  get f() { return this.crudApi.dataForm.controls; }
  ngOnInit(): void {
   
    this.crudApil.getAll().subscribe(
      lieuxaccidents => {
        this.lieuxAccidents = lieuxaccidents;
      },
      error => this.error = <any>error
    );
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()
      this.pageTitle = 'Create Accident route';
    } else {
      this.pageTitle = 'Update Accident route';
    }
   
    
  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      dateAccident: ['', [Validators.required]],
      heureAccident: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: [''],
      idlieux:[''],
      subType:[''],
      });
    }
    ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
    if (this.crudApi.choixmenu == "A")
    {
      this.addData();
    }
    else
    {
    this.updateData()
    }   
}

addData() {
  const formData = new  FormData();
    const route= this.crudApi.dataForm.value;
    formData.append('route',JSON.stringify(route));
    formData.append('file',this.userFile);
    this.crudApi.createAccidentRoute(formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/base/accidents']); 
    });
}
  updateData()
  {
    this.crudApi.updateAccidentRoute(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/base/accidents']); 
    });
  }

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
      const nomfile = event.target.files[0].name
      this.crudApi.dataForm.get('image').setValue(nomfile);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}

}
