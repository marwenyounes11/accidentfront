import { Component, OnInit ,Inject} from '@angular/core';
import { AccidentService} from '../../service/accident.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AccidentTransportService } from '../../service/accidenttransport.service';
import { IncidentJournalierService } from '../../service/incident-journalier.service';
@Component({
  selector: 'app-incident-journalier-bus',
  templateUrl: './incident-journalier-bus.component.html',
  styleUrls: ['./incident-journalier-bus.component.css']
})
export class IncidentJournalierBusComponent implements OnInit {

  public incidentJournalierroutes;
  public incidentJournaliertravails;
  public incidentJournaliercollisions;
  public dateAccident:String;
  control: FormControl = new FormControl('');
  constructor(public incidentJournalierService: IncidentJournalierService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder,
   ) { }
 
  ngOnInit() {
    
  
  }
  
  chercher(){
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
}
  
  
  
  
 
  
  
}
