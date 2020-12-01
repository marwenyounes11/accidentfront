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
import { AddBusComponent } from '../add-bus/add-bus.component';
import { AddMetroComponent } from '../add-metro/add-metro.component';
import { AddTgmComponent } from '../add-tgm/add-tgm.component';


@Component({
  selector: 'app-moyentransport',
  templateUrl: './moyentransport.component.html',
  styleUrls: ['./moyentransport.component.css']
})
export class MoyenTransportComponent implements OnInit {

  public moyenTransports;
  public buss;
  public tgms;
  public metros;
  modalOptions:NgbModalOptions;
  constructor(public crudApi: MoyenTransportService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder ,private modalService: NgbModal
    ) { this.modalOptions = {
      size:"xl"
    }}
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().pipe(
      map(
        (buss) => buss._embedded.moyenTransports.filter(
          (bus) => bus.type === 'bus'
        )
      )
    ).subscribe(
      (buss) => {
        this.buss = buss;
      }
    );
    this.crudApi.getAll().pipe(
      map(
        (metros) => metros._embedded.moyenTransports.filter(
          (metro) => metro.type === 'metro'
        )
      )
    ).subscribe(
      (metros) => {
        this.metros = metros;
      }
    );

    this.crudApi.getAll().pipe(
      map(
        (tgms) => tgms._embedded.moyenTransports.filter(
          (tgm) => tgm.type === 'tgm'
        )
      )
    ).subscribe(
      (tgms) => {
        this.tgms = tgms;
      }
    );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Moyen Transport ?')) {
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

  selectBus(id ) {
    this.crudApi.choixmenu = "M";
     
  if (id) {
    this.crudApi.getData(+id).subscribe(
      res => {
        console.log(res.id);
        this.crudApi.dataForm= this.fb.group({
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
    this.modalService.open(AddBusComponent,this.modalOptions);
  
  }
}

selectMetro(id ) {
  this.crudApi.choixmenu = "M";
   
if (id) {
  this.crudApi.getData(+id).subscribe(
    res => {
      console.log(res.id);
      this.crudApi.dataForm= this.fb.group({
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
  this.modalService.open(AddMetroComponent,this.modalOptions);

}
}

selectTgm(id ) {
  this.crudApi.choixmenu = "M";
   
if (id) {
  this.crudApi.getData(+id).subscribe(
    res => {
      console.log(res.id);
      this.crudApi.dataForm= this.fb.group({
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
  this.modalService.open(AddTgmComponent,this.modalOptions);

}
}
openBus() {
  this.modalService.open(AddBusComponent,this.modalOptions);
}
openMetro() {
  this.modalService.open(AddMetroComponent,this.modalOptions);
}
openTgm() {
  this.modalService.open(AddTgmComponent,this.modalOptions);
}

}
