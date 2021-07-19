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
   isCollapsed1: boolean = false;
   isCollapsed2: boolean = false;
   isCollapsed3: boolean = false;
   iconCollapse1: string = 'icon-arrow-up';
   iconCollapse2: string = 'icon-arrow-up';
   iconCollapse3: string = 'icon-arrow-up';
   isClose1: boolean = false;
   isClose2: boolean = false;
   isClose3: boolean = false;
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
   toggleCollapse3(): void {
    this.isCollapsed3 = !this.isCollapsed3;
    this.iconCollapse3 = this.isCollapsed3 ? 'icon-arrow-down' : 'icon-arrow-up';
  }
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
  
  close3() {
    this.isClose3 = !this.isClose3;
    const card = document.getElementById('id3');
    if (this.isClose2 )
    {
    card.style.display = "none";
    
  }
  }
}
