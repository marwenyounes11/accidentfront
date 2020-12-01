import { Component, OnInit,Inject } from '@angular/core';
import { MaterielService} from '../../service/materiel.service';
import { DepartementService} from '../../service/departement.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-boucheincendie',
  templateUrl: './add-boucheincendie.component.html',
  styleUrls: ['./add-boucheincendie.component.css']
})
export class AddBoucheIncendieComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: String;
  wcode : string = '';
  userFile ;
  imgURL: any;
  public message: string;
  public departements;
      id: FormControl;
  constructor(public crudApi: MaterielService,public crudApid: DepartementService,public fb: FormBuilder,public toastr: ToastrService, private router : Router ,private route: ActivatedRoute,
  ) { }
  get f() { return this.crudApi.dataForm.controls; }
  ngOnInit(): void {
   
   
    this.crudApid.getAll().subscribe(
      departements => {
        this.departements = departements;
      },
      error => this.error = <any>error
    );
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()
      this.pageTitle = 'Create Bouche Incendie';
    } else {
      this.pageTitle = 'Update Bouche Incendie';
    }
    
    
    
  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
      description: ['', [Validators.required]],
      numberSerie: ['', [Validators.required]],
      dateAcquisition: [''],
      heureAcquisition:[''],
      dateMaintenance:[''],
      heureMaintenance:[''],
      datePeremption:[''],
      heurePeremption:[''],
      image:[''],
      nombrebouche:[''],
      iddepartement:[''],
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
    const boucheincendie= this.crudApi.dataForm.value;
    formData.append('boucheincendie',JSON.stringify(boucheincendie));
    formData.append('file',this.userFile);
    this.crudApi.createBoucheIncendie(formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/base/materiels']); 
    });
}
  updateData()
  {
    this.crudApi.updateBoucheIncendie(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/base/materiels']); 
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
