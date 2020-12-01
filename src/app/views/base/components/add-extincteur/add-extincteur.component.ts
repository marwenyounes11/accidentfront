import { Component, OnInit,Inject } from '@angular/core';
import { MaterielService} from '../../service/materiel.service';
import { MoyenTransportService} from '../../service/moyentransport.service';
import { DepartementService} from '../../service/departement.service';
import { DepotService} from '../../service/depot.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-extincteur',
  templateUrl: './add-extincteur.component.html',
  styleUrls: ['./add-extincteur.component.css']
})
export class AddExtincteurComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: String;
  wcode : string = '';
  userFile ;
  imgURL: any;
  public message: string;
  public moyentransports;
  public depots;
  public departements;
  id: FormControl;
  constructor(public crudApi: MaterielService,public crudApimt: MoyenTransportService,public crudApid: DepartementService,public crudApidp: DepotService,public fb: FormBuilder,private modalService: NgbModal,public toastr: ToastrService, private router : Router ,private route: ActivatedRoute,
  ) { }
  get f() { return this.crudApi.dataForm.controls; }
  ngOnInit(): void {
   
    this.crudApimt.getAll().subscribe(
      moyentransports => {
        this.moyentransports = moyentransports;
      },
      error => this.error = <any>error
    );
    this.crudApid.getAll().subscribe(
      departements => {
        this.departements = departements;
      },
      error => this.error = <any>error
    );
    this.crudApidp.getAll().subscribe(
      depots => {
        this.depots = depots;
      },
      error => this.error = <any>error
    );
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()
      this.pageTitle = 'Create Extincteur';
    } else {
      this.pageTitle = 'Update Extincteur';
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
      subtype:[''],
      image:[''],
      emplacement:[''],
      idmoyentransport:[null],
      iddepot:[null],
      iddepartement:[null],
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
    const extincteur= this.crudApi.dataForm.value;
    formData.append('extincteur',JSON.stringify(extincteur));
    formData.append('file',this.userFile);
    this.crudApi.createExtincteur(formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.modalService.dismissAll();
      this.router.navigate(['/base/materiels']); 
    });
}
  updateData()
  {
    this.crudApi.updateExtincteur(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.modalService.dismissAll();
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

changeEmplacement(event){
  const moyentransport = document.getElementById('e1');
  const depot = document.getElementById('e2');
   const departement = document.getElementById('e3');
   
  if (event.target.value=="moyen transport")
    {
    depot.style.display = "none";
    departement.style.display = "none";
    moyentransport.style.display = 'inline';
  }
else if (event.target.value=="depot")
{
  depot.style.display = 'inline';
 departement.style.display = "none";
 moyentransport.style.display = 'none';
}
else if (event.target.value=="departement")
{
  depot.style.display = 'none';
 departement.style.display = "inline";
 moyentransport.style.display = 'none';
}
  else {
    console.warn("erreur");
  } 
 }
}
