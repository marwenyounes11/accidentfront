import { Component, OnInit ,Inject} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { IncidentJournalierService } from '../../service/incident-journalier.service';
@Component({
  selector: 'app-incident-journalier-reseaux',
  templateUrl: './incident-journalier-reseaux.component.html',
  styleUrls: ['./incident-journalier-reseaux.component.css']
})
export class IncidentJournalierReseauxComponent implements OnInit {

  public incidentJournalierroutes;
  public incidentJournaliertravails;
  public incidentJournaliercollisions;
  public dateAccident:String;
  public reseaux:string;
  control: FormControl = new FormControl('');
  constructor(public incidentJournalierService: IncidentJournalierService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder,
   ) { }
   isCollapsed1: boolean = false;
   isCollapsed2: boolean = false;
   iconCollapse: string = 'icon-arrow-up';
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
     this.iconCollapse = this.isCollapsed1 ? 'icon-arrow-down' : 'icon-arrow-up';
   }
   toggleCollapse2(): void {
     this.isCollapsed2 = !this.isCollapsed2;
     this.iconCollapse = this.isCollapsed2 ? 'icon-arrow-down' : 'icon-arrow-up';
   }
 
  ngOnInit() {
    
    
    
  }
  
  
chercher(){
  if(this.reseaux=='bus'){
  this.incidentJournalierService.getIncidentJournalierRoutes(this.dateAccident)
    .subscribe(data=>{
this.incidentJournalierroutes=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("bus") == 0);
    },err=>{
console.log(err);
    });

    this.incidentJournalierService.getIncidentJournalierTravails(this.dateAccident)
    .subscribe(data=>{
this.incidentJournaliertravails=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("bus") == 0);
    },err=>{
console.log(err);
    });

    this.incidentJournalierService.getIncidentJournalierCollisions(this.dateAccident)
    .subscribe(data=>{
this.incidentJournaliercollisions=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("bus") == 0);
    },err=>{
console.log(err);
    });
  }else if(this.reseaux=='metro'){
    this.incidentJournalierService.getIncidentJournalierRoutes(this.dateAccident)
    .subscribe(data=>{
this.incidentJournalierroutes=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("metro") == 0);
    },err=>{
console.log(err);
    });

    this.incidentJournalierService.getIncidentJournalierTravails(this.dateAccident)
    .subscribe(data=>{
this.incidentJournaliertravails=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("metro") == 0);
    },err=>{
console.log(err);
    });

    this.incidentJournalierService.getIncidentJournalierCollisions(this.dateAccident)
    .subscribe(data=>{
this.incidentJournaliercollisions=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("metro") == 0);
    },err=>{
console.log(err);
    });
  } else {
    this.incidentJournalierService.getIncidentJournalierRoutes(this.dateAccident)
    .subscribe(data=>{
this.incidentJournalierroutes=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("tgm") == 0);
    },err=>{
console.log(err);
    });

    this.incidentJournalierService.getIncidentJournalierTravails(this.dateAccident)
    .subscribe(data=>{
this.incidentJournaliertravails=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("tgm") == 0);
    },err=>{
console.log(err);
    });

    this.incidentJournalierService.getIncidentJournalierCollisions(this.dateAccident)
    .subscribe(data=>{
this.incidentJournaliercollisions=data.filter(incidentJournalier =>
  incidentJournalier.type.localeCompare("tgm") == 0);
    },err=>{
console.log(err);
    });
  } 
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
