import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RapportAccidentCollisionRouteService } from '../../service/rapportaccidentcollisionroute.service';
@Component({
  selector: 'app-rapportaccidentcollisionroutebus',
  templateUrl: './rapportaccidentcollisionroutebus.component.html',
  styleUrls: ['./rapportaccidentcollisionroutebus.component.css']
})
export class RapportAccidentCollisionRouteBusComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public accidents;public agents;public huissiers; public degats;public moyenTransport; public accidentcollisions;public accidentTransports;public accidentInforms;public sourceInform;public securites;public ambulanciers;public agentTranstus;
  public currentAccident;
  public dateInformation;public heureInformation;public description;
  constructor(public rapportAccidentCollisionRouteService: RapportAccidentCollisionRouteService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder,
   ) { }
  
 
  ngOnInit() {
    this.subscription= this.rapportAccidentCollisionRouteService.getAccidentBus()
    .subscribe(data=>{
this.accidents=data;
this.accidentcollisions=data.filter(accident =>
  accident.type.localeCompare("collision") == 0||accident.type.localeCompare("route") == 0 );
    },err=>{
console.log(err);
    })
  
  }
  
 
   
 
  onGetAccidentInforms(a){
    this.currentAccident=a;
    this.degats=a.degats;
    this.huissiers=a.huissiers;
    this.accidentInforms=a.accidentinforms;
    this.accidentTransports=a.accidenttransports;
  }

 
  
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  
}
