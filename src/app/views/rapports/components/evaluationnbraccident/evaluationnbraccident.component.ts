import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RapportStatistiqueService } from '../../service/rapportstatistique.service';
import { RapportFormatService } from '../../service/rapportformat.service';
@Component({
  selector: 'app-evaluationnbraccident',
  templateUrl: './evaluationnbraccident.component.html',
  styleUrls: ['./evaluationnbraccident.component.css']
})
export class EvaluationNbrAccidentComponent implements OnInit{
  nbrAccidentParMois;
  nbrMortParMois;
  nbrBlesserParMois;
  format; 
  d1;
  private subscription: Subscription;
  constructor(public rapportStatistiqueService: RapportStatistiqueService,public rapportFormatService: RapportFormatService, public toastr: ToastrService,
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
    
  
  }
  
  
  runservice(value){
    this.rapportStatistiqueService.getNbrAccidentParMois(value)
    .subscribe(data=>{
this.nbrAccidentParMois=data;
    },err=>{
console.log(err);
    });

    this.rapportStatistiqueService.getNbrMortsParMois(value)
    .subscribe(data=>{
this.nbrMortParMois=data;
    },err=>{
console.log(err);
    });

    this.rapportStatistiqueService.getNbrBlesserParMois(value)
    .subscribe(data=>{
this.nbrBlesserParMois=data;
    
},err=>{
console.log(err);
    })


    
}

runExcel1(){
  this.format="excel"
  this.rapportFormatService.getRreportNbrAccidentParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runCsv1(){
  this.format="csv"
  this.rapportFormatService.getRreportNbrAccidentParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runPdf1(){
  this.format="pdf"
  this.rapportFormatService.getRreportNbrAccidentParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runWord1(){
  this.format="docx"
  this.rapportFormatService.getRreportNbrAccidentParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runHtml1(){
  this.format="html"
  this.rapportFormatService.getRreportNbrAccidentParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}

runExcel2(){
  this.format="excel"
  this.rapportFormatService.getRreportNbrMortsParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runCsv2(){
  this.format="csv"
  this.rapportFormatService.getRreportNbrMortsParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runPdf2(){
  this.format="pdf"
  this.rapportFormatService.getRreportNbrMortsParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runWord2(){
  this.format="docx"
  this.rapportFormatService.getRreportNbrMortsParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runHtml2(){
  this.format="html"
  this.rapportFormatService.getRreportNbrMortsParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}

runExcel3(){
  this.format="excel"
  this.rapportFormatService.getRreportNbrBlesserParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runCsv3(){
  this.format="csv"
  this.rapportFormatService.getRreportNbrBlesserParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runPdf3(){
  this.format="pdf"
  this.rapportFormatService.getRreportNbrBlesserParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runWord3(){
  this.format="docx"
  this.rapportFormatService.getRreportNbrBlesserParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}
runHtml3(){
  this.format="html"
  this.rapportFormatService.getRreportNbrBlesserParMois(this.format,this.d1).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
}


 
chercher(event) {
  
  this.runservice(event.target.value);
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
