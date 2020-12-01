import { Component, OnInit,Inject } from '@angular/core';
import { AccidentService} from '../../service/accident.service';
import { TypeAccidentService} from '../../service/typeaccident.service';
import { LieuxAccidentService} from '../../service/lieuxaccident.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { TypeAccident} from '../../model/typeaccident';
import { LieuxAccident} from '../../model/lieuxaccident';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-accidenttravail',
  templateUrl: './add-accidenttravail.component.html',
  styleUrls: ['./add-accidenttravail.component.css']
})
export class AddAccidentTravailComponent implements OnInit {
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
      //localisation:FormControl;
      idlieux:FormControl;
     // newLieux:FormControl;
      subType:FormControl;
  constructor(public crudApi: AccidentService,public crudApil: LieuxAccidentService,public crudApita: TypeAccidentService ,public fb: FormBuilder,public toastr: ToastrService, private router : Router ,private route: ActivatedRoute,
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
      this.pageTitle = 'Create Accident travail';
    } else {
      this.pageTitle = 'Update Accident travail';
    }
   
    
  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      dateAccident: ['', [Validators.required]],
      heureAccident: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: [''],
     // localisation:['station'],
      idlieux:[''],
     // newLieux:[''],
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
    const travail= this.crudApi.dataForm.value;
    formData.append('travail',JSON.stringify(travail));
    formData.append('file',this.userFile);
    this.crudApi.createAccidentTravail(formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/base/accidents']); 
    });
}
  updateData()
  {
    this.crudApi.updateAccidentTravail(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).subscribe( data => {
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
/*changeStation(event){
  const stas = document.getElementById('e1');
  const nl = document.getElementById('e2');
  if (event.target.value=="station")
    {
    nl.style.display = "none";
    stas.style.display = 'inline';
  }
else if (event.target.value=="newlieux")
{
  nl.style.display = 'inline';
  stas.style.display = "none";
}
  else {
    console.warn("erreur");
  } 
 }*/

}
