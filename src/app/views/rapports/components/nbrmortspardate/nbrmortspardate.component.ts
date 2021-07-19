import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RapportStatistiqueService } from '../../service/rapportstatistique.service';
import { NbrMortsParDate } from '../../model/nbrmortspardate';
import { RapportFormatService } from '../../service/rapportformat.service';
@Component({
  selector: 'app-nbrmortspardate',
  templateUrl: './nbrmortspardate.component.html',
  styleUrls: ['./nbrmortspardate.component.css']
})
export class NbrMortsParDateComponent implements OnInit, OnDestroy {
  public nbrMortsParDate: NbrMortsParDate[] = [];
  format;
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
    this.subscription= this.rapportStatistiqueService.getNbrMortsParDate()
    .subscribe(data=>{
this.nbrMortsParDate=data;
    },err=>{
console.log(err);
    })
  
  }
  
  
  runExcel(){
    this.format="excel"
    this.rapportFormatService.getReportNbrMortsParDate(this.format).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
  }
 
  runCsv(){
    this.format="csv"
    this.rapportFormatService.getReportNbrMortsParDate(this.format).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
  }

  runPdf(){
    this.format="pdf"
    this.rapportFormatService.getReportNbrMortsParDate(this.format).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
  }

  runWord(){
    this.format="docx"
    this.rapportFormatService.getReportNbrMortsParDate(this.format).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
  }

  runHtml(){
    this.format="html"
    this.rapportFormatService.getReportNbrMortsParDate(this.format).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
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
