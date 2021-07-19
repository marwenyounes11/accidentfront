  
import { Component, OnInit ,Inject, Input} from '@angular/core';
import { AccidentService} from '../../service/accident.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { LieuxAccidentService } from '../../service/lieuxaccident.service';


@Component({
  selector: 'app-gestionaccident',
  templateUrl: './gestionaccident.component.html',
  styleUrls: ['./gestionaccident.component.css']
})
export class GestionAccidentComponent implements OnInit {
  formatimg;
  idtypeaccident:Number;
  public accidentcollisions;
  public accidentroutes ;
  public accidenttravails;
  control: FormControl = new FormControl('');
  modalOptions:NgbModalOptions;
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: String;
  wcode : string = '';
  userFile ;
  imgURL: any;
  public message: string;
  submitted = false;
  public lieuxAccidents;
  public acollisions;
  public aroutes ;
  public atravails; 
  motcle1 = '';
  motcle2 = '';
  motcle3 = '';
  page1=1 ;
  count1 ;
  pageSize1 = 2;
  page2 = 1;
  count2 ;
  pageSize2 = 2;
  page3 = 1;
  count3 ;
  pageSize3 = 2;
  pageSizes = [2,3,4,5,6]; 
  constructor(public crudApil: LieuxAccidentService,public crudApi: AccidentService, public toastr: ToastrService,private modalService: NgbModal,
    private router : Router,public fb: FormBuilder,
   ) 
   { this.modalOptions = {
    size:"xl"
  }}

  
  get f1() { return this.crudApi.dataForm1.controls; }
  get f2() { return this.crudApi.dataForm2.controls; }
  get f3() { return this.crudApi.dataForm3.controls; }
  ngOnInit() {
   
    this.retrieveAccidentCollision();
    this.retrieveAccidentRoute();
    this.retrieveAccidentTravail();
    this.formatimg='jpg'
    this.crudApil.getAll().subscribe(
      lieuxaccidents => {
        this.lieuxAccidents = lieuxaccidents;
      },
      error => this.error = <any>error
    );
   
   this.infoFormCollision();
   this.infoFormRoute();
   this.infoFormTravail();

   
    
  }

  retrieveAccidentCollisionMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getAccidentsCollisionPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.accidentcollisions = response;
        this.crudApi.getAccidentsCollision().subscribe(
         
          r =>{this.acollisions = r;
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

  retrieveAccidentCollision(): void {
    let p = this.page1-1;
    
    this.crudApi.getAccidentsCollisionPagination( p, this.pageSize1).subscribe(
      response =>{this.accidentcollisions = response;
        this.crudApi.getAccidentsCollision().subscribe(
         
          r =>{this.acollisions = r;
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

  retrieveAccidentRouteMc(): void {
    let p = this.page2-1;
    
    this.crudApi.getAccidentsRoutePaginationMc(this.motcle2, p, this.pageSize2).subscribe(
      response =>{this.accidentroutes = response;
        this.crudApi.getAccidentsRoute().subscribe(
         
          r =>{this.aroutes = r;
            console.log(r.length);
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

  retrieveAccidentRoute(): void {
    let p = this.page2-1;
    
    this.crudApi.getAccidentsRoutePagination( p, this.pageSize2).subscribe(
      response =>{this.accidentroutes = response;
        this.crudApi.getAccidentsRoute().subscribe(
         
          r =>{this.aroutes = r;
            console.log(r.length);
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

  retrieveAccidentTravailMc(): void {
    let p = this.page3-1;
    
    this.crudApi.getAccidentsTravailPaginationMc(this.motcle3, p, this.pageSize3).subscribe(
      response =>{this.accidenttravails = response;
        this.crudApi.getAccidentsTravail().subscribe(
         
          r =>{this.atravails = r;
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

  retrieveAccidentTravail(): void {
    let p = this.page3-1;
    
    this.crudApi.getAccidentsTravailPagination( p, this.pageSize3).subscribe(
      response =>{this.accidenttravails = response;
        this.crudApi.getAccidentsTravail().subscribe(
         
          r =>{this.atravails = r;
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

  handlePageChange1(event): void {
    this.page1 = event;
    this.retrieveAccidentCollision();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveAccidentCollision();
  }

  handlePageChange2(event): void {
    this.page2 = event;
    this.retrieveAccidentRoute();
  }

  handlePageSizeChange2(event): void {
    this.pageSize2 = event.target.value;
    this.retrieveAccidentRoute();
  }

  handlePageChange3(event): void {
    this.page3 = event;
    this.retrieveAccidentCollision();
  }

  handlePageSizeChange3(event): void {
    this.pageSize3 = event.target.value;
    this.retrieveAccidentCollision();
  }
  infoFormCollision() {
    this.crudApi.dataForm1 = this.fb.group({
      id: [''],
      dateAccident: ['', [ RxwebValidators.required()]],
      heureAccident: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.time()
        ]})]],
        description:['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'regex': /^([a-zA-Z]+[ ]?)+[a-zA-Z]+$/} })
          ]})]],
      image: [''],
      idlieux:['', [ RxwebValidators.required()]],
      subType:['', [ RxwebValidators.required()]],
      });
    }
   
    infoFormRoute() {
      this.crudApi.dataForm2 = this.fb.group({
        id: [''],
        dateAccident: ['', [ RxwebValidators.required()]],
        heureAccident: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.time()
          ]})]],
          description:['', [ RxwebValidators.compose({
            validators:[
            RxwebValidators.required(),
            RxwebValidators.pattern({expression:{'regex': /^([a-zA-Z]+[ ]?)+[a-zA-Z]+$/} })
            ]})]],
        image: [''],
        idlieux:['', [ RxwebValidators.required()]],
        subType:['', [ RxwebValidators.required()]],
        });
      }

      infoFormTravail() {
        this.crudApi.dataForm3 = this.fb.group({
          id: [''],
          dateAccident: ['', [ RxwebValidators.required()]],
          heureAccident: ['', [ RxwebValidators.compose({
            validators:[
            RxwebValidators.required(),
            RxwebValidators.time()
            ]})]],
            description:['', [ RxwebValidators.compose({
              validators:[
              RxwebValidators.required(),
              RxwebValidators.pattern({expression:{'regex': /^([a-zA-Z]+[ ]?)+[a-zA-Z]+$/} })
              ]})]],
          image: [''],
          idlieux:['', [ RxwebValidators.required()]],
          subType:['', [ RxwebValidators.required()]],
          });
        }
  onSubmitCollision() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.crudApi.dataForm1.invalid) {
        return;
    }
    if (this.crudApi.choixmenu == "A")
    {
      this.addDataCollision();
    }
    else
    {
    this.updateDataCollision()
    }   
}
addDataCollision() {
  const formData = new  FormData();
    const accidentcollision= this.crudApi.dataForm1.value;
    formData.append('accidentcollision',JSON.stringify(accidentcollision));
    formData.append('file',this.userFile);
    this.crudApi.createAccidentCollision(formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.retrieveAccidentCollision();
      this.modalService.dismissAll();
    });
}
  updateDataCollision()
  {
    const formData = new  FormData();
    const accidentcollision= this.crudApi.dataForm1.value;
    formData.append('accidentcollision',JSON.stringify(accidentcollision));
    formData.append('file',this.userFile);
    this.crudApi.updateAccidentCollision(this.crudApi.dataForm1.value.id,formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.retrieveAccidentCollision();
      this.modalService.dismissAll();
     
    });
  }
onSubmitRoute() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.crudApi.dataForm2.invalid) {
      return;
  }
  if (this.crudApi.choixmenu == "A")
  {
    this.addDataRoute();
  }
  else
  {
  this.updateDataRoute()
  }   
}

addDataRoute() {
  const formData = new  FormData();
    const accident= this.crudApi.dataForm2.value;
    formData.append('accidentroute',JSON.stringify(accident));
    formData.append('file',this.userFile);
    this.crudApi.createAccidentRoute(formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.retrieveAccidentRoute();
      this.modalService.dismissAll();
   
    });
}
  updateDataRoute()
  {
    const formData = new  FormData();
    const accident= this.crudApi.dataForm2.value;
    formData.append('accidentroute',JSON.stringify(accident));
    formData.append('file',this.userFile);
    this.crudApi.updateAccidentRoute(this.crudApi.dataForm2.value.id,formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.retrieveAccidentRoute();
      this.modalService.dismissAll();
    });
  }


onSubmitTravail() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.crudApi.dataForm3.invalid) {
      return;
  }
  if (this.crudApi.choixmenu == "A")
  {
    this.addDataTravail();
  }
  else
  {
  this.updateDataTravail()
  }   
}

addDataTravail() {
  const formData = new  FormData();
    const accident= this.crudApi.dataForm3.value;
    formData.append('accidenttravail',JSON.stringify(accident));
    formData.append('file',this.userFile);
    this.crudApi.createAccidentTravail(formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.retrieveAccidentTravail();
      this.modalService.dismissAll();
    });
}
  updateDataTravail()
  {
    const formData = new  FormData();
    const accident= this.crudApi.dataForm3.value;
    formData.append('accidenttravail',JSON.stringify(accident));
    formData.append('file',this.userFile);
    this.crudApi.updateAccidentTravail(this.crudApi.dataForm3.value.id,formData).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.retrieveAccidentTravail();
      this.modalService.dismissAll();
    });
  }


  onSelectFile1(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
      const nomfile = event.target.files[0].name
      this.crudApi.dataForm1.get('image').setValue(nomfile);
 
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
  
onSelectFile2(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile = file;
    const nomfile = event.target.files[0].name
    this.crudApi.dataForm2.get('image').setValue(nomfile);

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

onSelectFile3(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile = file;
    const nomfile = event.target.files[0].name
    this.crudApi.dataForm3.get('image').setValue(nomfile);

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

  
 getDataCollision() {
    this.crudApi.getAccidentsCollision().subscribe(
      response =>{this.accidentcollisions = response;
      },err=>{
        console.log(err);
          }
     );
    }
    getDataRoute() {
     this.crudApi.getAccidentsRoute().subscribe(
      response =>{this.accidentroutes = response;
      },err=>{
        console.log(err);
          }
     );
    }
     getDataTravail() {
     this.crudApi.getAccidentsTravail().subscribe(
      response =>{this.accidenttravails = response;
      },err=>{
        console.log(err);
          }
     );
    }
  
 
  removeDataCollision(id: number) {
    if (window.confirm('Are sure you want to delete this Accident ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
          this.retrieveAccidentCollision();
        },
        error => console.log(error));
       
  }
  }

  removeDataRoute(id: number) {
    if (window.confirm('Are sure you want to delete this Accident ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
          this.retrieveAccidentRoute();
        },
        error => console.log(error));
       
  }
  }

  removeDataTravail(id: number) {
    if (window.confirm('Are sure you want to delete this Accident ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
          this.retrieveAccidentTravail();
        },
        error => console.log(error));
        
  }
  }

  
  selectCollision(id,content ) {
    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getAccident(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm1= this.fb.group({
            id:res.id,
            dateAccident: res.dateAccident,
            heureAccident: res.heureAccident,
            description: res.description,
            image:res.image,
            idlieux: res.lieux.id,
            subType: res.subType
          });
          
        }
      );
      this.modalService.open(content,this.modalOptions);
    } 
   
    
  }

  selectRoute(id,content ) {
    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getAccident(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm2= this.fb.group({
            id:res.id,
            dateAccident: res.dateAccident,
            heureAccident: res.heureAccident,
            description: res.description,
            image:res.image,
            idlieux: res.lieux.id,
            subType: res.subType
          });
          
        }
      );
      this.modalService.open(content,this.modalOptions);
    } 
   
    
  }

  selectTravail(id,content ) {
    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getAccident(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm3= this.fb.group({
            id:res.id,
            dateAccident: res.dateAccident,
            heureAccident: res.heureAccident,
            description: res.description,
            image:res.image,
            idlieux: res.lieux.id,
            subType: res.subType
          });
          
        }
      );
      this.modalService.open(content,this.modalOptions);
    } 
   
    
  }

  openCollision(content) {
    this.crudApi.choixmenu = "A";
    const modalRef =this.modalService.open(content,this.modalOptions);
    
}
  openRoute(content) {
    this.crudApi.choixmenu = "A";
    this.modalService.open(content,this.modalOptions);
    
}
openTravail(content) {
  this.crudApi.choixmenu = "A";
  const modalRef =this.modalService.open(content,this.modalOptions);
 
}

closemod(){
  this.modalService.dismissAll();
 
}

}
