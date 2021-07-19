import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RapportAccidentCollisionRouteService } from '../../service/rapportaccidentcollisionroute.service';
import { AccidentService } from '../../../parametres/service/accident.service';
import { MoyenTransportService } from '../../../parametres/service/moyentransport.service';
import { Accident } from '../../../parametres/model/accident';
@Component({
  selector: 'app-rapportaccidentcollisionroutebus',
  templateUrl: './rapportaccidentcollisionroutebus.component.html',
  styleUrls: ['./rapportaccidentcollisionroutebus.component.css']
})
export class RapportAccidentCollisionRouteBusComponent implements OnInit {

  public moyenTransport;
  public accidenttransports;
  public accident:Accident;
  public accidents;public agents;public huissiers; public degats;public moyenTransports; public accidentcollisions:Accident[]= [];public accidentTransports;public accidentInforms;public sourceInform;public securites;public ambulanciers;public agentTranstus;
  public currentAccident;
  public dateInformation;public heureInformation;public description;
  constructor(public rapportAccidentCollisionRouteService: RapportAccidentCollisionRouteService,public accidentService: AccidentService, public moyentransportService: MoyenTransportService,public toastr: ToastrService,
    private router : Router,public fb: FormBuilder,
   ) { }
  
   isCollapsed1: boolean = false;
   isCollapsed2: boolean = false;
   iconCollapse1: string = 'icon-arrow-up';
   iconCollapse2: string = 'icon-arrow-up';
   isClose1: boolean = false;
   isClose2: boolean = false;
   collapsed(event: any): void {
     // console.log(event);
   }
 
   expanded(event: any): void {
     // console.log(event);
   }
 
   toggleCollapse1(): void {
     this.isCollapsed1 = !this.isCollapsed1;
     this.iconCollapse1 = this.isCollapsed1 ? 'icon-arrow-down' : 'icon-arrow-up';
   }
   toggleCollapse2(): void {
     this.isCollapsed2 = !this.isCollapsed2;
     this.iconCollapse2 = this.isCollapsed2 ? 'icon-arrow-down' : 'icon-arrow-up';
   }
  
  ngOnInit() {
     this.rapportAccidentCollisionRouteService.getAccidentBus()
    .subscribe(data=>{

    this.accidentcollisions=data;

    },err=>{
console.log(err);
    })
  
  
  }
  
 
   
 
  onGetAccidentInforms(a){
    this.currentAccident=a;
    this.degats=a.degats;
    this.huissiers=a.huissiers;
    this.accidentInforms=a.accidentinforms;
    this.accidenttransports=a.accidenttransports;
  }

 
  
  
 
  
  close1() {
    this.isClose1 = !this.isClose1;
    const card = document.getElementById('id1');
    if (this.isClose1 )
    {
    card.style.display = "none";
    
  }
  }
    
  close2() {
    this.isClose2 = !this.isClose2;
    const card = document.getElementById('id2');
    if (this.isClose2 )
    {
    card.style.display = "none";
    
  }
  }
  
 
}
