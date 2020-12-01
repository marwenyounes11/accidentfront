import { Component,ViewChild, OnInit ,Inject} from '@angular/core';
import { MaterielService} from '../../service/materiel.service';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { map } from 'rxjs/operators';
import { AddExtincteurComponent } from '../add-extincteur/add-extincteur.component';
import { AddPoteauxIncendieComponent } from '../add-poteauxincendie/add-poteauxincendie.component';
import { AddRobinetIncendieComponent } from '../add-robinetincendie/add-robinetincendie.component';
import { AddBoucheIncendieComponent } from '../add-boucheincendie/add-boucheincendie.component';
import { ExtincteurDto } from '../dto/extincteurdto';
import { PoteauxIncendieDto } from '../dto/poteauxincendiedto';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  public materiels;
  public extincteur:ExtincteurDto;
  public poteauxincendie:PoteauxIncendieDto;
  public extincteurs;
  public poteauxincendies;
  public boucheincendies;
  public robinetincendies;
  modalOptions:NgbModalOptions;
  constructor(public crudApi: MaterielService, public toastr: ToastrService, private modalService: NgbModal,
    private router : Router,public fb: FormBuilder
    ) { this.modalOptions = {
      size:"xl"
    }}
    get f() { return this.crudApi.dataForm.controls; }
 
  ngOnInit() {
    this.getData();
  }
 
  getData() {
    this.crudApi.getMateriels().pipe(
      map(
        (extincteurs) => extincteurs._embedded.materiels.filter(
          (extincteur) => extincteur.type === 'extincteur'
        )
      )
    ).subscribe(
      (extincteurs) => {
        this.extincteurs = extincteurs;
      }
    );
    
     this.crudApi.getMateriels().subscribe(
      response =>{this.poteauxincendies = response._embedded.materiels.filter(poteauxincendie =>
        poteauxincendie.type.localeCompare("poteauxincendie") == 0);
      },err=>{
        console.log(err);
          }
     );

     this.crudApi.getMateriels().subscribe(
      response =>{this.boucheincendies = response._embedded.materiels.filter(boucheincendie =>
        boucheincendie.type.localeCompare("boucheincendie") == 0);
      },err=>{
        console.log(err);
          }
     );

     this.crudApi.getMateriels().subscribe(
      response =>{this.robinetincendies = response._embedded.materiels.filter(robinetincendie =>
        robinetincendie.type.localeCompare("robinetincendie") == 0);
      },err=>{
        console.log(err);
          }
     );
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Materiel ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.getData();
        },
        error => console.log(error));
  }
  }
  

  selectExtincteur(id ) {
    this.crudApi.choixmenu = "M";
     
  if (id) {
    this.crudApi.getMateriel(+id).subscribe(
      res => {
        console.log(res.id);
        this.crudApi.dataForm= this.fb.group({
    id:res.id,
    description:res.description,
    numberSerie:res.numberSerie,
    dateAcquisition:res.dateAcquisition,
    heureAcquisition:res.heureAcquisition,
    dateMaintenance:res.dateMaintenance,
    heureMaintenance:res.heureMaintenance,
    datePeremption:res.datePeremption,
    heurePeremption:res.heurePeremption,
    subtype:res.subtype,
    image:res.image,
    emplacement:res.emplacement,
    idmoyentransport:res.moyentransport?res.moyentransport.id:'',
    iddepot:res.depot?res.depot.id:'',
    iddepartement:res.departement?res.departement.id:'',
  });
}
);
    this.modalService.open(AddExtincteurComponent,this.modalOptions);
  
  }
}
  selectPoteaux(id ) {
    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getMateriel(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
            id:res.id,
            description: res.description,
            numberSerie: res.numberSerie,
            dateAcquisition: res.dateAcquisition,
            heureAcquisition:res.heureAcquisition,
            dateMaintenance:res.dateMaintenance,
            heureMaintenance:res.heureMaintenance,
            datePeremption:res. datePeremption,
            heurePeremption:res.heurePeremption,
            image:res.image,
            coleurpoteaux:res.coleurpoteaux,
            iddepartement:res.departement.id,
          });
          
        }
      );
      this.modalService.open(AddPoteauxIncendieComponent,this.modalOptions);
    } 
   
    
  }

  selectRobinet(id ) {
    this.crudApi.choixmenu = "M";
    if (id) {
      this.crudApi.getMateriel(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
            id:res.id,
            description: res.description,
            numberSerie: res.numberSerie,
            dateAcquisition: res.dateAcquisition,
            heureAcquisition:res.heureAcquisition,
            dateMaintenance:res.dateMaintenance,
            heureMaintenance:res.heureMaintenance,
            datePeremption:res. datePeremption,
            heurePeremption:res.heurePeremption,
            image:res.image,
            length:res.length,
            diametre:res.diametre,
            iddepartement:res.departement.id,
          });
          
        }
      );
    this.modalService.open(AddRobinetIncendieComponent,this.modalOptions); 
   }
  }

  selectBouche(id ) {
    this.crudApi.choixmenu = "M";
    if (id) {
      this.crudApi.getMateriel(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
            id:res.id,
            description: res.description,
            numberSerie: res.numberSerie,
            dateAcquisition: res.dateAcquisition,
            heureAcquisition:res.heureAcquisition,
            dateMaintenance:res.dateMaintenance,
            heureMaintenance:res.heureMaintenance,
            datePeremption:res. datePeremption,
            heurePeremption:res.heurePeremption,
            image:res.image,
            nombrebouche:res.nombrebouche,
            iddepartement:res.departement.id,
          });
          
        }
      );
    this.modalService.open(AddBoucheIncendieComponent,this.modalOptions);
  }
}
  openExtincteur() {
    this.modalService.open(AddExtincteurComponent,this.modalOptions);
}
  openPoteaux() {
    this.modalService.open(AddPoteauxIncendieComponent,this.modalOptions);
}
openRobinet() {
  this.modalService.open(AddRobinetIncendieComponent,this.modalOptions);
}
openBouche() {
  this.modalService.open(AddBoucheIncendieComponent,this.modalOptions);
}

}
