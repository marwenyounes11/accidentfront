  
import { Component, OnInit ,Inject} from '@angular/core';
import { AccidentService} from '../../service/accident.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AddAccidentCollisionComponent } from '../add-accidentcollision/add-accidentcollision.component';
import { AddAccidentRouteComponent } from '../add-accidentroute/add-accidentroute.component';
import { AddAccidentTravailComponent } from '../add-accidenttravail/add-accidenttravail.component';


@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {
  idtypeaccident:Number;
  public accidentcollisions;
  public accidentroutes ;
  public accidenttravails;
  control: FormControl = new FormControl('');
  modalOptions:NgbModalOptions;
  constructor(public crudApi: AccidentService, public toastr: ToastrService,private modalService: NgbModal,
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

  ngOnInit() {
    
    this.getData();
  }
  
  

  
  getData() {
    this.crudApi.getAccidents().subscribe(
      response =>{this.accidentcollisions = response._embedded.accidents.filter(accidentcollision =>
        accidentcollision.type.localeCompare("collision") == 0);
      },err=>{
        console.log(err);
          }
     );

     this.crudApi.getAccidents().subscribe(
      response =>{this.accidentroutes = response._embedded.accidents.filter(accidentroute =>
        accidentroute.type.localeCompare("route") == 0);
      },err=>{
        console.log(err);
          }
     );

     this.crudApi.getAccidents().subscribe(
      response =>{this.accidenttravails = response._embedded.accidents.filter(accidenttravail =>
        accidenttravail.type.localeCompare("travail") == 0);
      },err=>{
        console.log(err);
          }
     );
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Accident ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
          this.getData();
        },
        error => console.log(error));
  }
  }
  selectData(item ) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
  }
  selectCollision(id ) {
    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getAccident(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
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
      this.modalService.open(AddAccidentCollisionComponent,this.modalOptions);
    } 
   
    
  }

  selectRoute(id ) {
    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getAccident(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
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
      this.modalService.open(AddAccidentRouteComponent,this.modalOptions);
    } 
   
    
  }

  selectTravail(id ) {
    this.crudApi.choixmenu = "M";
   
  if (id) {
      this.crudApi.getAccident(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
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
      this.modalService.open(AddAccidentTravailComponent,this.modalOptions);
    } 
   
    
  }

  openCollision() {
    this.modalService.open(AddAccidentCollisionComponent,this.modalOptions);
}
  openRoute() {
    this.modalService.open(AddAccidentRouteComponent,this.modalOptions);
}
openTravail() {
  this.modalService.open(AddAccidentTravailComponent,this.modalOptions);
}



}
