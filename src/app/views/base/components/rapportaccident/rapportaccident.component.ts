import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RapportAccidentService } from '../../service/rapportaccident.service';
@Component({
  selector: 'app-rapportaccident',
  templateUrl: './rapportaccident.component.html',
  styleUrls: ['./rapportaccident.component.css']
})
export class RapportAccidentComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public accidents; public accidentInforms;public sourceInform;public securites;public ambulanciers;public agentTranstus;
  public currentAccident;
  public dateInformation;public heureInformation;public description;
  constructor(public rapportAccidentService: RapportAccidentService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder,
   ) { }
 
  ngOnInit() {
    this.subscription= this.rapportAccidentService.getAccidents()
    .subscribe(data=>{
this.accidents=data;
    },err=>{
console.log(err);
    })
  
  }
  
  
  onGetAccidentInforms(a){
    this.currentAccident=a;
    this.rapportAccidentService.getAccidentInforms(a)
    .subscribe(data=>{
this.accidentInforms=data;
this.accidentInforms._embedded.accidentInforms.forEach(accidentInform => {
  this.dateInformation =accidentInform.dateInformation;
  this.description =accidentInform.description;
  this.heureInformation =accidentInform.heureInformation;
  this.rapportAccidentService.getSourceInform(accidentInform)
    .subscribe(data=>{
      this.sourceInform=data;
      this.rapportAccidentService.getAgentTranstus(this.sourceInform)
      .subscribe(data=>{
        this.agentTranstus=data;
            },err=>{
        console.log(err);
            });
            this.rapportAccidentService.getSecurites(this.sourceInform)
      .subscribe(data=>{
        this.securites=data;
            },err=>{
        console.log(err);
            });
            this.rapportAccidentService.getAmbulanciers(this.sourceInform)
      .subscribe(data=>{
        this.ambulanciers=data;
            },err=>{
        console.log(err);
            });
    },err=>{
console.log(err);
    })
});
    },err=>{
console.log(err);
    })
  }

 
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
 
  
  
}
