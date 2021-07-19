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
import { MoyenTransportService } from '../../../parametres/service/moyentransport.service';
import { DepartementService } from '../../../parametres/service/departement.service';
import { DepotService } from '../../../parametres/service/depot.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { NotificationService } from '../../../parametres/service/notification.service';



@Component({
  selector: 'app-gestionmateriel',
  templateUrl: './gestionmateriel.component.html',
  styleUrls: ['./gestionmateriel.component.css']
})
export class GestionMaterielComponent implements OnInit {
  id: FormControl;
  description: FormControl;
  numberSerie: FormControl;
  dateAcquisition: FormControl;
  heureAcquisition: FormControl;
  dateMaintenance: FormControl;
  heureMaintenance: FormControl;
  datePeremption: FormControl;
  heurePeremption: FormControl;
  image: FormControl;
  coleurpoteaux: FormControl;
  iddepartement: FormControl;
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath1: String;
  imagePath2: String;
  imagePath3: String;
  imagePath4: String;
  wcode : string = '';
  userFile1 ;
  userFile2 ;
  userFile3 ;
  userFile4 ;
  imgURL1: any;
  imgURL2: any;
  imgURL3: any;
  imgURL4: any;
  public message: string;
  submitted = false;
  public moyentransports;
  public depots;
  public departements;
  public materiels;
  public extincteurs;
  public poteauxincendies;
  public boucheincendies;
  public robinetincendies;
  motcle1 = '';
  motcle2 = '';
  motcle3 = '';
  motcle4 = '';
  page1=1 ;
  count1 ;
  pageSize1 = 2;
  page2 = 1;
  count2 ;
  pageSize2 = 2;
  page3 = 1;
  count3 ;
  pageSize3 = 2;
  page4 = 1;
  count4 ;
  pageSize4 = 2;
  pageSizes = [2,3,4,5,6]; 
  modalOptions:NgbModalOptions;
  public notif={
    subject: '',
    text:''
  }
  constructor(public crudApin: NotificationService,public crudApi: MaterielService,public crudApimt: MoyenTransportService,public crudApid: DepartementService,public crudApidp: DepotService, public toastr: ToastrService, private modalService: NgbModal,
    private router : Router,public fb: FormBuilder
    ) { this.modalOptions = {
      size:"xl"
    }}
    get f1() { return this.crudApi.dataForm1.controls; }
    get f2() { return this.crudApi.dataForm2.controls; }
    get f3() { return this.crudApi.dataForm3.controls; }
    get f4() { return this.crudApi.dataForm4.controls; }
 
  ngOnInit() {
    this.retrieveExtincteur();
    this.retrievePoteaux();
    this.retrieveBouche();
    this.retrieveRobinet();
    console.log(this.userFile1);
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
    this.infoFormExtincteur();
    this.infoFormPoteaux();
    this.infoFormBouche();
    this.infoFormRobinet();
  }
 
  retrieveExtincteurMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getExtincteurPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.extincteurs = response;
        this.crudApi.getExtincteur().subscribe(
         
          r =>{
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrieveExtincteur(): void {
    let p = this.page1-1;
    
    this.crudApi.getExtincteurPagination( p, this.pageSize1).subscribe(
      response =>{this.extincteurs = response;
        this.extincteurs.forEach(ex => {
          let numbs=ex.numberSerie;
          let dsys=new Date();
          let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
          let d=new Date(ex.datePeremption); 
          let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
          if(datesys>=dateperemp){
           this.notif.subject="Date Peremption";
           this.notif.text="la date de péremption pour l'extincteur avec numéro de serie" + numbs + " a été dépasser";
            this.crudApin.createData(this.notif).subscribe( data => {
             
            });
          }
               
              }
            );
        this.crudApi.getExtincteur().subscribe(
         
          r =>{
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrievePoteauxMc(): void {
    let p = this.page2-1;
    
    this.crudApi.getPoteauxPaginationMc(this.motcle2, p, this.pageSize2).subscribe(
      response =>{this.poteauxincendies= response;
        this.crudApi.getPoteaux().subscribe(
         
          r =>{
            this.count2 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrievePoteaux(): void {
    let p = this.page2-1;
    
    this.crudApi.getPoteauxPagination( p, this.pageSize2).subscribe(
      response =>{this.poteauxincendies = response;
        this.poteauxincendies.forEach(pt => {
          let numbs=pt.numberSerie;
          let dsys=new Date();
          let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
          let d=new Date(pt.datePeremption); 
          let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
          if(datesys>=dateperemp){
           this.notif.subject="Date Peremption";
           this.notif.text="la date de péremption pour le poteaux d'incendie avec numéro de serie" + numbs + " a été dépasser";
            this.crudApin.createData(this.notif).subscribe( data => {
             
            });
          }
               
              }
            );
        this.crudApi.getPoteaux().subscribe(
         
          r =>{
            this.count2 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrieveBoucheMc(): void {
    let p = this.page3-1;
    
    this.crudApi.getBouchePaginationMc(this.motcle3, p, this.pageSize3).subscribe(
      response =>{this.boucheincendies= response;
        this.crudApi.getBouche().subscribe(
         
          r =>{
            this.count3 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrieveBouche(): void {
    let p = this.page3-1;
    
    this.crudApi.getBouchePagination( p, this.pageSize3).subscribe(
      response =>{this.boucheincendies = response;

        this.boucheincendies.forEach(bi => {
          let numbs=bi.numberSerie;
          let dsys=new Date();
          let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
          let d=new Date(bi.datePeremption); 
          let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
          if(datesys>=dateperemp){
           this.notif.subject="Date Peremption";
           this.notif.text="la date de péremption pour la bouche d'incendie avec numéro de serie" + numbs + " a été dépasser";
            this.crudApin.createData(this.notif).subscribe( data => {
             
            });
          }
               
              }
            );

        this.crudApi.getBouche().subscribe(
         
          r =>{
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrieveRobinetMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getRobinetPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.robinetincendies= response;
        this.crudApi.getRobinet().subscribe(
         
          r =>{
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrieveRobinet(): void {
    let p = this.page1-1;
    
    this.crudApi.getRobinetPagination( p, this.pageSize1).subscribe(
      response =>{this.robinetincendies = response;
        this.robinetincendies.forEach(ri => {
          let numbs=ri.numberSerie;
          let dsys=new Date();
          let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
          let d=new Date(ri.datePeremption); 
          let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
          if(datesys>=dateperemp){
           this.notif.subject="Date Peremption";
           this.notif.text="la date de péremption pour la robinet d'incendie avec numéro de serie" + numbs + " a été dépasser";
            this.crudApin.createData(this.notif).subscribe( data => {
             
            });
          }
               
              }
            );
        this.crudApi.getRobinet().subscribe(
         
          r =>{
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  handlePageChange1(event): void {
    this.page1 = event;
    this.retrieveExtincteur();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveExtincteur();
  }

  handlePageChange2(event): void {
    this.page2 = event;
    this.retrievePoteaux();
  }

  handlePageSizeChange2(event): void {
    this.pageSize2 = event.target.value;
    this.retrievePoteaux();
  }

  handlePageChange3(event): void {
    this.page3 = event;
    this.retrieveBouche();
  }

  handlePageSizeChange3(event): void {
    this.pageSize3 = event.target.value;
    this.retrieveBouche();
  }

  handlePageChange4(event): void {
    this.page3 = event;
    this.retrieveRobinet();
  }

  handlePageSizeChange4(event): void {
    this.pageSize3 = event.target.value;
    this.retrieveRobinet();
  }

  infoFormExtincteur() {
    this.crudApi.dataForm1 = this.fb.group({
      id: [''],
      description: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.alpha()
        ]})]],
      numberSerie: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.alphaNumeric()
        ]})]],
      dateAcquisition: ['', [ RxwebValidators.required()]],
      heureAcquisition:['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.time()
        ]})]],
      dateMaintenance:['', [ RxwebValidators.required()]],
      heureMaintenance:['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.time()
        ]})]],
      datePeremption:['', [ RxwebValidators.required()]],
      heurePeremption:['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.time()
        ]})]],
      subtype: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required()
        ]})]],
      image:[''],
      emplacement:[''],
      idmoyentransport:[null],
      iddepot:[null],
      iddepartement:[null],
      });
    }
    
  onSubmitExtincteur() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.crudApi.dataForm1.invalid) {
        return;
    }
      if (this.crudApi.choixmenu == "A")
      {
        this.addDataExtincteur();
      }
      else
      {
      this.updateDataExtincteur()
      }   
  }


addDataExtincteur() {
  const formData = new  FormData();
    const extincteur= this.crudApi.dataForm1.value;
    let numbs=this.crudApi.dataForm1.controls.numberSerie.value;
    let dsys=new Date();
    let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
    let d=new Date(this.crudApi.dataForm1.controls.datePeremption.value); 
    let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(datesys>=dateperemp){
     this.notif.subject="Date Peremption";
     this.notif.text="la date de péremption pour l'extincteur avec numéro de serie" + numbs + " a été dépasser";
      this.crudApin.createData(this.notif).subscribe( data => {
       
      });
    }
    formData.append('extincteur',JSON.stringify(extincteur));
    formData.append('file',this.userFile1);
    this.crudApi.createExtincteur(formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.modalService.dismissAll();
      this.retrieveExtincteur();
    });
}
  updateDataExtincteur()
  {
    const formData = new  FormData();
    const extincteur= this.crudApi.dataForm1.value;
    let numbs=this.crudApi.dataForm1.controls.numberSerie.value;
    let dsys=new Date();
    let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
    let d=new Date(this.crudApi.dataForm1.controls.datePeremption.value); 
    let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(datesys>=dateperemp){
     this.notif.subject="Date Peremption";
     this.notif.text="la date de péremption pour l'extincteur avec numéro de serie" + numbs + " a été dépasser";
      this.crudApin.createData(this.notif).subscribe( data => {
       
      });
    }
    formData.append('extincteur',JSON.stringify(extincteur));
    formData.append('file',this.userFile1);
    this.crudApi.updateExtincteur(this.crudApi.dataForm1.value.id,formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.modalService.dismissAll();
      this.retrieveExtincteur();
    });
  }

  onSelectFile1(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile1 = file;
      const nomfile = event.target.files[0].name
      this.crudApi.dataForm1.get('image').setValue(nomfile);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath1 = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL1 = reader.result; 
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

 infoFormBouche() {
  this.crudApi.dataForm2 = this.fb.group({
    id: [''],
    description: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alpha()
      ]})]],
    numberSerie: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alphaNumeric()
      ]})]],
    dateAcquisition: ['', [ RxwebValidators.required()]],
    heureAcquisition:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    dateMaintenance:['', [ RxwebValidators.required()]],
    heureMaintenance:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    datePeremption:['', [ RxwebValidators.required()]],
    heurePeremption:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    image:[''],
    nombrebouche: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.numeric()
      ]})]],
    iddepartement:['', [ RxwebValidators.required()]],
    });
  }
 
onSubmitBouche() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.crudApi.dataForm2.invalid) {
      return;
  }
  if (this.crudApi.choixmenu == "A")
  {
    this.addDataBouche();
  }
  else
  {
  this.updateDataBouche()
  }   
}

addDataBouche() {
const formData = new  FormData();
  const boucheincendie= this.crudApi.dataForm2.value;
  let numbs=this.crudApi.dataForm1.controls.numberSerie.value;
    let dsys=new Date();
    let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
    let d=new Date(this.crudApi.dataForm1.controls.datePeremption.value); 
    let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(datesys>=dateperemp){
     this.notif.subject="Date Peremption";
     this.notif.text="la date de péremption pour la bouche d'incendie avec numéro de serie" + numbs + " a été dépasser";
      this.crudApin.createData(this.notif).subscribe( data => {
       
      });
    }
  formData.append('boucheincendie',JSON.stringify(boucheincendie));
  formData.append('file',this.userFile2);
  this.crudApi.createBoucheIncendie(formData).subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.modalService.dismissAll();
    this.retrieveBouche();
  });
}
updateDataBouche()
{
  const formData = new  FormData();
  const boucheincendie= this.crudApi.dataForm2.value;
  let numbs=this.crudApi.dataForm1.controls.numberSerie.value;
  let dsys=new Date();
    let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
    let d=new Date(this.crudApi.dataForm1.controls.datePeremption.value); 
    let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(datesys>=dateperemp){
     this.notif.subject="Date Peremption";
     this.notif.text="la date de péremption pour la bouche d'incendie avec numéro de serie" + numbs + " a été dépasser";
      this.crudApin.createData(this.notif).subscribe( data => {
       
      });
    }
  formData.append('boucheincendie',JSON.stringify(boucheincendie));
  formData.append('file',this.userFile2);
  this.crudApi.updateBoucheIncendie(this.crudApi.dataForm2.value.id,formData).subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.modalService.dismissAll();
    this.retrieveBouche();
  });
}


onSelectFile2(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile2 = file;
    const nomfile = event.target.files[0].name
    this.crudApi.dataForm2.get('image').setValue(nomfile);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath2 = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL2 = reader.result; 
  }
}
}

infoFormPoteaux() {
  this.crudApi.dataForm3 = this.fb.group({
    id: [''],
    description: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alpha()
      ]})]],
    numberSerie: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alphaNumeric()
      ]})]],
    dateAcquisition: ['', [ RxwebValidators.required()]],
    heureAcquisition:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    dateMaintenance:['', [ RxwebValidators.required()]],
    heureMaintenance:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    datePeremption:['', [ RxwebValidators.required()]],
    heurePeremption:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    image:[''],
    coleurpoteaux:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alpha()
      ]})]],
    iddepartement:['', [ RxwebValidators.required()]],
    });
  }
 
onSubmitPoteaux() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.crudApi.dataForm3.invalid) {
      return;
  }
  if (this.crudApi.choixmenu == "A")
  {
    this.addDataPoteaux();
  }
  else
  {
  this.updateDataPoteaux()
  }   
}

addDataPoteaux() {
const formData = new  FormData();
  const poteauxincendie= this.crudApi.dataForm3.value;
  let numbs=this.crudApi.dataForm1.controls.numberSerie.value;
  let dsys=new Date();
    let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
    let d=new Date(this.crudApi.dataForm1.controls.datePeremption.value); 
    let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(datesys>=dateperemp){
     this.notif.subject="Date Peremption";
     this.notif.text="la date de péremption pour la Poteaux d'incendie avec numéro de serie" + numbs + " a été dépasser";
      this.crudApin.createData(this.notif).subscribe( data => {
       
      });
    }
  formData.append('poteauxincendie',JSON.stringify(poteauxincendie));
  formData.append('file',this.userFile3);
  this.crudApi.createPoteauxIncendie(formData).subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.modalService.dismissAll();
    this.retrievePoteaux();
  });
}
updateDataPoteaux()
{
  const formData = new  FormData();
  const poteauxincendie= this.crudApi.dataForm3.value;
  let numbs=this.crudApi.dataForm1.controls.numberSerie.value;
  let dsys=new Date();
    let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
    let d=new Date(this.crudApi.dataForm1.controls.datePeremption.value); 
    let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(datesys>=dateperemp){
     this.notif.subject="Date Peremption";
     this.notif.text="la date de péremption pour la Poteaux d'incendie avec numéro de serie" + numbs + " a été dépasser";
      this.crudApin.createData(this.notif).subscribe( data => {
       
      });
    }
  formData.append('poteauxincendie',JSON.stringify(poteauxincendie));
  formData.append('file',this.userFile3);
  this.crudApi.updatePoteauxIncendie(this.crudApi.dataForm3.value.id,formData).subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.modalService.dismissAll();
    this.retrievePoteaux();
  });
}


onSelectFile3(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile3 = file;
    const nomfile = event.target.files[0].name
    this.crudApi.dataForm3.get('image').setValue(nomfile);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath3 = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL3 = reader.result; 
  }
}
}

infoFormRobinet() {
  this.crudApi.dataForm4 = this.fb.group({
    id: [''],
    description: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alpha()
      ]})]],
    numberSerie: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alphaNumeric()
      ]})]],
    dateAcquisition: ['', [ RxwebValidators.required()]],
    heureAcquisition:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    dateMaintenance:['', [ RxwebValidators.required()]],
    heureMaintenance:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    datePeremption:['', [ RxwebValidators.required()]],
    heurePeremption:['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.time()
      ]})]],
    image:[''],
    length: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alphaNumeric()
      ]})]],
    diametre: ['', [ RxwebValidators.compose({
      validators:[
      RxwebValidators.required(),
      RxwebValidators.alphaNumeric()
      ]})]],
    iddepartement:['', [ RxwebValidators.required()]],
    });
  }
  
onSubmitRobinet() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.crudApi.dataForm4.invalid) {
      return;
  }
  if (this.crudApi.choixmenu == "A")
  {
    this.addDataRobinet();
  }
  else
  {
  this.updateDataRobinet()
  }   
}

addDataRobinet() {
const formData = new  FormData();
  const robinetincendie= this.crudApi.dataForm4.value;
  let numbs=this.crudApi.dataForm1.controls.numberSerie.value;
  let dsys=new Date();
    let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
    let d=new Date(this.crudApi.dataForm1.controls.datePeremption.value); 
    let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(datesys>=dateperemp){
     this.notif.subject="Date Peremption";
     this.notif.text="la date de péremption pour la Robinet d'incendie avec numéro de serie" + numbs + " a été dépasser";
      this.crudApin.createData(this.notif).subscribe( data => {
       
      });
    }
  formData.append('robinetincendie',JSON.stringify(robinetincendie));
  formData.append('file',this.userFile4);
  this.crudApi.createRobinetIncendie(formData).subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.modalService.dismissAll();
    this.retrieveRobinet();
  });
}
updateDataRobinet()
{
  const formData = new  FormData();
  const robinetincendie= this.crudApi.dataForm4.value;
  let numbs=this.crudApi.dataForm1.controls.numberSerie.value;
  let dsys=new Date();
    let datesys = dsys.getFullYear()+'-'+(dsys.getMonth()+1)+'-'+dsys.getDate();
    let d=new Date(this.crudApi.dataForm1.controls.datePeremption.value); 
    let dateperemp = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(datesys>=dateperemp){
     this.notif.subject="Date Peremption";
     this.notif.text="la date de péremption pour la Robinet d'incendie avec numéro de serie" + numbs + " a été dépasser";
      this.crudApin.createData(this.notif).subscribe( data => {
       
      });
    }
  formData.append('robinetincendie',JSON.stringify(robinetincendie));
  formData.append('file',this.userFile4);
  this.crudApi.updateRobinetIncendie(this.crudApi.dataForm4.value.id,formData).subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.modalService.dismissAll();
    this.retrieveRobinet();
  });
}

onSelectFile4(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile4 = file;
    const nomfile = event.target.files[0].name
    this.crudApi.dataForm4.get('image').setValue(nomfile);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath4 = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL4 = reader.result; 
  }
}
}

  getDataExtincteur() {
   

    this.crudApi.getData().subscribe(
      response =>{this.extincteurs = response.filter(extincteur =>
        extincteur.type.localeCompare("extincteur") == 0);
      },err=>{
        console.log(err);
          }
     );
    }
    getDataPoteaux() {
     this.crudApi.getData().subscribe(
      response =>{this.poteauxincendies = response.filter(poteauxincendie =>
        poteauxincendie.type.localeCompare("poteauxincendie") == 0);
      },err=>{
        console.log(err);
          }
     );
    }
    getDataBouche() {
     this.crudApi.getData().subscribe(
      response =>{this.boucheincendies = response.filter(boucheincendie =>
        boucheincendie.type.localeCompare("boucheincendie") == 0);
      },err=>{
        console.log(err);
          }
     );
    }
    getDataRobinet() {
     this.crudApi.getData().subscribe(
      response =>{this.robinetincendies = response.filter(robinetincendie =>
        robinetincendie.type.localeCompare("robinetincendie") == 0);
      },err=>{
        console.log(err);
          }
     );
  }
  
 
  removeDataExtincteur(id: number) {
    if (window.confirm('Are sure you want to delete this Materiel ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveExtincteur();
        },
        error => console.log(error));
  }
  }
  
  removeDataPoteaux(id: number) {
    if (window.confirm('Are sure you want to delete this Materiel ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrievePoteaux();
        },
        error => console.log(error));
  }
  }
  
  removeDataBouche(id: number) {
    if (window.confirm('Are sure you want to delete this Materiel ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveBouche();
        },
        error => console.log(error));
  }
  }
  
  removeDataRobinet(id: number) {
    if (window.confirm('Are sure you want to delete this Materiel ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveRobinet();
        },
        error => console.log(error));
  }
  }
  

  selectExtincteur(id,content ) {
    this.crudApi.choixmenu = "M";
    this.infoFormExtincteur();
  if (id) {
    this.crudApi.getMateriel(id).subscribe(
      res => {
        this.crudApi.dataForm1= this.fb.group({
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
    iddepartement:res.departement?res.departement.id:''
  });
}
);
console.log(this.crudApi.dataForm1.controls.image.value);
    this.modalService.open(content,this.modalOptions);
  
  }
}
  selectPoteaux(id,content ) {
    this.crudApi.choixmenu = "M";
  if (id) {
      this.crudApi.getMateriel(id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm3= this.fb.group({
            id:res.id,
            description:res.description,
            numberSerie:res.numberSerie,
            dateAcquisition:res.dateAcquisition,
            heureAcquisition:res.heureAcquisition,
            dateMaintenance:res.dateMaintenance,
            heureMaintenance:res.heureMaintenance,
            datePeremption:res.datePeremption,
            heurePeremption:res.heurePeremption,
            image:res.image,
            coleurpoteaux:res.coleurpoteaux,
            iddepartement:res.departement.id
          });
          
        }
      );
      this.modalService.open(content,this.modalOptions);
    } 
   
    
  }

  selectRobinet(id,content ) {
    this.crudApi.choixmenu = "M";
    this.infoFormRobinet();
    if (id) {
      this.crudApi.getMateriel(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm4= this.fb.group({
            id:res.id,
            description: res.description,
            numberSerie: res.numberSerie,
            dateAcquisition: res.dateAcquisition,
            heureAcquisition:res.heureAcquisition,
            dateMaintenance:res.dateMaintenance,
            heureMaintenance:res.heureMaintenance,
            datePeremption:res.datePeremption,
            heurePeremption:res.heurePeremption,
            image:res.image,
            length:res.length,
            diametre:res.diametre,
            iddepartement:res.departement.id
          });
          
        }
      );
    this.modalService.open(content,this.modalOptions); 
   }
  }

  selectBouche(id,content ) {
    this.crudApi.choixmenu = "M";
    this.infoFormBouche();
    if (id) {
      this.crudApi.getMateriel(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm2= this.fb.group({
            id:res.id,
            description: res.description,
            numberSerie: res.numberSerie,
            dateAcquisition: res.dateAcquisition,
            heureAcquisition:res.heureAcquisition,
            dateMaintenance:res.dateMaintenance,
            heureMaintenance:res.heureMaintenance,
            datePeremption:res.datePeremption,
            heurePeremption:res.heurePeremption,
            image:res.image,
            nombrebouche:res.nombrebouche,
            iddepartement:res.departement.id
          });
          
        }
      );
    this.modalService.open(content,this.modalOptions);
  }
}
  openExtincteur(content) {
    this.modalService.open(content,this.modalOptions);
}
  openPoteaux(content) {
    this.modalService.open(content,this.modalOptions);
}
openRobinet(content) {
  this.modalService.open(content,this.modalOptions);
}
openBouche(content) {
  this.modalService.open(content,this.modalOptions);
}

}
