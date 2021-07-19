  
import { Component, OnInit ,Inject} from '@angular/core';
import { DegatService} from '../../service/degat.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Accident } from '../../model/accident';
import { AccidentService } from '../../service/accident.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';



@Component({
  selector: 'app-gestiondegat',
  templateUrl: './gestiondegat.component.html',
  styleUrls: ['./gestiondegat.component.css']
})
export class GestionDegatComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  accidents:Accident[];
  public message: string;
  submitted = false;
  public degatmateriels;
  public degatphysiques;
  public dmateriels ;
  public dphysiques; 
  motcle1 = '';
  motcle2 = '';
  page1=1 ;
  count1 ;
  pageSize1 = 2;
  page2 = 1;
  count2 ;
  pageSize2 = 2;
  pageSizes = [2,3,4,5,6]; 
  control: FormControl = new FormControl('');
  modalOptions:NgbModalOptions;
  constructor(public crudApi: DegatService, public toastr: ToastrService,private modalService: NgbModal,public crudApia: AccidentService ,
    private router : Router,public fb: FormBuilder,
   ) { this.modalOptions = {
    size:"xl"
  }}

  totalItems: number = 20;
  currentPage: number   = 1;
  
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  get f1() { return this.crudApi.dataForm1.controls; }
  get f2() { return this.crudApi.dataForm2.controls; }
  ngOnInit() {
    this.infoFormMateriel();
    this.infoFormPhysique();
    
    this.crudApia.getAccidents().subscribe(
      accidents => {
        this.accidents = accidents;
      },
      error => this.error = <any>error
    );
    this.retrieveDegatMateriel();
    this.retrieveDegatPhysique();
  }
  retrieveDegatMateriel(): void {
    let p = this.page1-1;
    
    this.crudApi.getDegatMaterielsPagination( p, this.pageSize1).subscribe(
      response =>{this.degatmateriels = response;
        this.crudApi.getDegatMateriels().subscribe(
         
          r =>{this.dmateriels = r;
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

  retrieveDegatPhysique(): void {
    let p = this.page2-1;
    
    this.crudApi.getDegatPhysiquesPagination( p, this.pageSize2).subscribe(
      response =>{this.degatphysiques = response;
        this.crudApi.getDegatPhysiques().subscribe(
         
          r =>{this.dphysiques = r;
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

  handlePageChange1(event): void {
    this.page1 = event;
    this.retrieveDegatMateriel();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveDegatMateriel();
  }

  handlePageChange2(event): void {
    this.page2 = event;
    this.retrieveDegatPhysique();
  }

  handlePageSizeChange2(event): void {
    this.pageSize2 = event.target.value;
    this.retrieveDegatPhysique();
  }


  infoFormMateriel() {
    this.crudApi.dataForm1 = this.fb.group({
      id: [''],
      value: ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{'value': /^[0-9]+[,]?[0-9]+$/} })
        ]})]],
        description:['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'regex': /^([a-zA-Z]+[ ]?)+[a-zA-Z]+$/} })
          ]})]],
      idAccident: ['', [RxwebValidators.required()]],
      });
    }
   
   
  onSubmitMateriel() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.crudApi.dataForm1.invalid) {
        return;
    }
    if (this.crudApi.choixmenu == "A")
    {
      this.addDataMateriel();
    }
    else
    {
    this.updateDataMateriel()
    }   
}

addDataMateriel() {
    const materiel= this.crudApi.dataForm1.value;
    this.crudApi.createDegatMateriel(materiel).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.getDataMateriel();
      this.modalService.dismissAll();
    });
}
  updateDataMateriel()
  {
    this.crudApi.updateDegatMateriel(this.crudApi.dataForm1.value.id,this.crudApi.dataForm1.value).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.getDataMateriel();
      this.modalService.dismissAll();
    });
  }
  
  infoFormPhysique() {
    this.crudApi.dataForm2 = this.fb.group({
      id: [''],
      description:['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{'regex': /^([a-zA-Z]+[ ]?)+[a-zA-Z]+$/} })
        ]})]],
        idAccident: ['', [RxwebValidators.required()]],
        });
    }
    onSubmitPhysique() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.crudApi.dataForm2.invalid) {
          return;
      }
      if (this.crudApi.choixmenu == "A")
      {
        this.addDataPhysique();
      }
      else
      {
      this.updateDataPhysique()
      }   
  }
  
  addDataPhysique() {
      const physique= this.crudApi.dataForm2.value;
      this.crudApi.createDegatPhysique(physique).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
        this.getDataPhysique();
        this.modalService.dismissAll();
      });
  }
    updateDataPhysique()
    {
      this.crudApi.updateDegatPhysique(this.crudApi.dataForm2.value.id,this.crudApi.dataForm2.value).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
        this.getDataPhysique();
        this.modalService.dismissAll();
      });
    }
  getDataMateriel() {
    this.crudApi.getDegatMateriels().subscribe(
      response =>{this.degatmateriels= response;
      },err=>{
        console.log(err);
          }
     );
    }
    getDataPhysique() {
     this.crudApi.getDegatPhysiques().subscribe(
      response =>{this.degatphysiques= response;
      },err=>{
        console.log(err);
          }
     );

     
  }
  
 
  removeDataMateriel(id: number) {
    if (window.confirm('Are sure you want to delete this degat ?')) {
    this.crudApi.deleteDegat(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveDegatMateriel();
        },
        error => console.log(error));
  }
  }

  removeDataPhysique(id: number) {
    if (window.confirm('Are sure you want to delete this degat ?')) {
    this.crudApi.deleteDegat(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveDegatPhysique();
        },
        error => console.log(error));
  }
  }

 
  selectMateriel(id ,content) {

    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getDegatMateriel(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm1= this.fb.group({
            id:res.id,
            value: res.value,
            description: res.description,
            idAccident: res.accident.id
          });
          
        }
      );
      this.modalService.open(content,this.modalOptions);
    } 
   
    
  }

  selectPhysique(id ,content) {
    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getDegatPhysique(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm2= this.fb.group({
            id:res.id,
            description: res.description,
            numberWounded: res.numberWounded,
            numberDead: res.numberDead,
            idAccident: res.accident.id
          });
          
        }
      );
      this.modalService.open(content,this.modalOptions);
    } 
   
    
  }

 
  openMateriel(content) {
    this.crudApi.choixmenu = "A";
    this.modalService.open(content,this.modalOptions);
}
  openPhysique(content) {
    this.crudApi.choixmenu = "A";
    this.modalService.open(content,this.modalOptions);
}



}
