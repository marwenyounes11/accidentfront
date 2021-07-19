import { Component, OnInit ,Inject} from '@angular/core';
import { MoyenTransportService} from '../../service/moyentransport.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { map } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import { AgentService } from '../../service/agent.service';
import { LigneService } from '../../service/ligne.service';
import { DepotService } from '../../service/depot.service';
import { DistrictService } from '../../service/district.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-gestionmoyentransport',
  templateUrl: './gestionmoyentransport.component.html',
  styleUrls: ['./gestionmoyentransport.component.css']
})
export class GestionMoyenTransportComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public agents;
  public lignes;
  public depots;
  public districts;
  public message: string;
  submitted = false;
  public moyenTransports;
  public buss;
  public tgms;
  public metros;
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
  modalOptions:NgbModalOptions;
  constructor(public crudApi: MoyenTransportService,public crudApiag: AgentService,public crudApil: LigneService,public crudApid:DepotService,public crudApidi:DistrictService , public toastr: ToastrService,
    private router : Router,public fb: FormBuilder ,private modalService: NgbModal
    ) { this.modalOptions = {
      size:"xl"
    }}
 
    get f1() { return this.crudApi.dataForm1.controls; }
    get f2() { return this.crudApi.dataForm2.controls; }
    get f3() { return this.crudApi.dataForm3.controls; }
  ngOnInit() {
    this.infoFormBus();
    this.infoFormMetro();
    this.infoFormTgm();
    this.crudApiag.getAgents().subscribe(
      agents => {
        this.agents = agents;
      },
      error => this.error = <any>error
    );
    this.crudApil.getAll().subscribe(
      lignes => {
        this.lignes = lignes;
      },
      error => this.error = <any>error
    );
    this.crudApidi.getAll().subscribe(
      districts => {
        this.districts = districts;
      },
      error => this.error = <any>error
    );
    this.crudApid.getAll().subscribe(
      depots => {
        this.depots = depots;
      },
      error => this.error = <any>error
    );
    this.retrieveBus();
    this.retrieveMetros();
    this.retrieveTgm();
  }
  

  retrieveBusMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getBusPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.buss = response;
        this.crudApi.getBus().subscribe(
         
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

  retrieveBus(): void {
    let p = this.page1-1;
    
    this.crudApi.getBusPagination( p, this.pageSize1).subscribe(
      response =>{this.buss = response;
        this.crudApi.getBus().subscribe(
         
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

  retrieveMetrosMc(): void {
    let p = this.page2-1;
    
    this.crudApi.getMetrosPaginationMc(this.motcle2, p, this.pageSize2).subscribe(
      response =>{this.metros = response;
        this.crudApi.getMetros().subscribe(
         
          r =>{
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

  retrieveMetros(): void {
    let p = this.page2-1;
    
    this.crudApi.getMetrosPagination( p, this.pageSize2).subscribe(
      response =>{this.metros = response;
        this.crudApi.getMetros().subscribe(
         
          r =>{
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


  retrieveTgmMc(): void {
    let p = this.page3-1;
    
    this.crudApi.getTgmPaginationMc(this.motcle3, p, this.pageSize3).subscribe(
      response =>{this.tgms = response;
        this.crudApi.getTgm().subscribe(
         
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

  retrieveTgm(): void {
    let p = this.page3-1;
    
    this.crudApi.getTgmPagination( p, this.pageSize3).subscribe(
      response =>{this.tgms = response;
        this.crudApi.getTgm().subscribe(
         
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

  handlePageChange1(event): void {
    this.page1 = event;
    this.retrieveBus();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveBus();
  }

  handlePageChange2(event): void {
    this.page2 = event;
    this.retrieveMetros();
  }

  handlePageSizeChange2(event): void {
    this.pageSize2 = event.target.value;
    this.retrieveMetros();
  }

  handlePageChange3(event): void {
    this.page3 = event;
    this.retrieveTgm();
  }

  handlePageSizeChange3(event): void {
    this.pageSize3 = event.target.value;
    this.retrieveTgm();
  }

  infoFormBus() {
    this.crudApi.dataForm1 = this.fb.group({
      id: [''],
        gage: ['', [ RxwebValidators.pattern({expression:{'gage': /^[0-9]+[ ]?[a-zA-Z]+$/} })]],
        immatriculation: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alphaNumeric()
          ]})]],
        mark: ['', [RxwebValidators.pattern({expression:{'mark': /^[a-zA-Z]+[ ]?[a-zA-Z]+$/} })]],
        model: ['', [RxwebValidators.pattern({expression:{'model': /^[a-zA-Z]+[ ]?[a-zA-Z]+$/} })]],
        numTransport: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'nt': /^[0-9]+[ ]?[a-zA-Z]?$/} })
          ]})]],
        idagent: ['', [RxwebValidators.required()]],
        idligne: ['', [RxwebValidators.required()]],
        iddistrict: ['', [RxwebValidators.required()]],
        iddepot: ['', [RxwebValidators.required()]],
        });
    }
 
    onSubmitBus() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.crudApi.dataForm1.invalid) {
          return;
      }
      if (this.crudApi.choixmenu == "A")
      {
        this.addDataBus();
      }
      else
      {
      this.updateDataBus()
      }   
  }
  
  addDataBus() {
    const bus = this.crudApi.dataForm1.value;
    this.crudApi.createBus(bus).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
        this.retrieveBus();
        this.modalService.dismissAll();
      });
  }
    updateDataBus()
    {
      this.crudApi.updateBus(this.crudApi.dataForm1.value.id,this.crudApi.dataForm1.value).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
        this.retrieveBus();
        this.modalService.dismissAll();
      });
    }

    infoFormMetro() {
      this.crudApi.dataForm2 = this.fb.group({
        id: [''],
        gage: ['', [ RxwebValidators.pattern({expression:{'gage': /^[0-9]+[ ]?[a-zA-Z]+$/} })]],
        immatriculation: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alphaNumeric()
          ]})]],
        numTransport: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.pattern({expression:{'nt': /^[0-9]+[ ]?[a-zA-Z]?$/} })
          ]})]],
        idagent: ['', [RxwebValidators.required()]],
        idligne: ['', [RxwebValidators.required()]],
        iddistrict: ['', [RxwebValidators.required()]],
        iddepot: ['', [RxwebValidators.required()]],
        });
      }
   
   
      
    onSubmitMetro() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.crudApi.dataForm2.invalid) {
          return;
      }
      if (this.crudApi.choixmenu == "A")
      {
        this.addDataMetro();
      }
      else
      {
      this.updateDataMetro()
      }   
  }
  
  addDataMetro() {
    const metro = this.crudApi.dataForm2.value;
    this.crudApi.createMetro(metro).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
        this.retrieveMetros();
        this.modalService.dismissAll();
      });
  }
    updateDataMetro()
    {
      this.crudApi.updateMetro(this.crudApi.dataForm2.value.id,this.crudApi.dataForm2.value).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
        this.retrieveMetros();
        this.modalService.dismissAll();
      });
    }

    infoFormTgm() {
      this.crudApi.dataForm3 = this.fb.group({
        id: [''],
        gage: ['', [ RxwebValidators.pattern({expression:{'gage': /^[0-9]+[ ]?[a-zA-Z]+$/} })]],
        immatriculation: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alphaNumeric()
          ]})]],
        idagent: ['', [RxwebValidators.required()]],
        idligne: ['', [RxwebValidators.required()]],
        iddistrict: ['', [RxwebValidators.required()]],
        iddepot: ['', [RxwebValidators.required()]],
        });
          
      }
   
    
     
    onSubmitTgm() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.crudApi.dataForm3.invalid) {
          return;
      }
      if (this.crudApi.choixmenu == "A")
      {
        this.addDataTgm();
      }
      else
      {
      this.updateDataTgm()
      }   
  }
  
  addDataTgm() {
    const tgm= this.crudApi.dataForm3.value;
    this.crudApi.createTgm(tgm).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
        this.retrieveTgm();
        this.modalService.dismissAll();
      });
  }
    updateDataTgm()
    {
      this.crudApi.updateTgm(this.crudApi.dataForm3.value.id,this.crudApi.dataForm3.value).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
        this.retrieveTgm();
        this.modalService.dismissAll();
      });
    }

 
  
 
  removeDataBus(id: number) {
    if (window.confirm('Are sure you want to delete this Moyen Transport ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveBus();
        },
        error => console.log(error));
  }
  }

  removeDataMetros(id: number) {
    if (window.confirm('Are sure you want to delete this Moyen Transport ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveMetros();
        },
        error => console.log(error));
  }
  }

  removeDataTgm(id: number) {
    if (window.confirm('Are sure you want to delete this Moyen Transport ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveTgm();
        },
        error => console.log(error));
  }
  }

  selectBus(id,content ) {
    this.crudApi.choixmenu = "M";
     
  if (id) {
    this.crudApi.getData(+id).subscribe(
      res => {
        console.log(res.id);
        this.crudApi.dataForm1= this.fb.group({
          id:res.id,
          gage: res.gage,
          immatriculation: res.immatriculation,
          mark: res.mark,
          model: res.model,
          numTransport: res.numTransport,
          idagent: res.agent.id,
          idligne: res.ligne.id,
          iddistrict: res.district.id,
          iddepot: res.depot.id,
  });
}
);
    this.modalService.open(content,this.modalOptions);
  
  }
}

selectMetro(id,content ) {
  this.crudApi.choixmenu = "M";
   
if (id) {
  this.crudApi.getData(+id).subscribe(
    res => {
      console.log(res.id);
      this.crudApi.dataForm2= this.fb.group({
        id:res.id,
        gage: res.gage,
        immatriculation: res.immatriculation,
        numTransport: res.numTransport,
        idagent: res.agent.id,
        idligne: res.ligne.id,
        iddistrict: res.district.id,
        iddepot: res.depot.id,
});
}
);
  this.modalService.open(content,this.modalOptions);

}
}

selectTgm(id,content ) {
  this.crudApi.choixmenu = "M";
   
if (id) {
  this.crudApi.getData(+id).subscribe(
    res => {
      console.log(res.id);
      this.crudApi.dataForm3= this.fb.group({
        id:res.id,
        gage: res.gage,
        immatriculation: res.immatriculation,
        idagent: res.agent.id,
        idligne: res.ligne.id,
        iddistrict: res.district.id,
        iddepot: res.depot.id,
});
}
);
  this.modalService.open(content,this.modalOptions);

}
}
openBus(content) {
  this.crudApi.choixmenu = "A";
  this.modalService.open(content,this.modalOptions);
}
openMetro(content) {
  this.crudApi.choixmenu = "A";
  this.modalService.open(content,this.modalOptions);
}
openTgm(content) {
  this.crudApi.choixmenu = "A";
  this.modalService.open(content,this.modalOptions);
}

}
