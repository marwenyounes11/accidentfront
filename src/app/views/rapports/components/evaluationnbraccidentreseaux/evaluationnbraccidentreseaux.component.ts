import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RapportStatistiqueService } from '../../service/rapportstatistique.service';
import { RapportFormatService } from '../../service/rapportformat.service';
@Component({
  selector: 'app-evaluationnbraccidentreseaux',
  templateUrl: './evaluationnbraccidentreseaux.component.html',
  styleUrls: ['./evaluationnbraccidentreseaux.component.css']
})
export class EvaluationNbrAccidentReseauxComponent implements OnInit{
  nbrAccidentCollisionParAnner;
  nbrAccidentRouteParAnner;
  pourcentageAccidentCollision;
  pourcentageBlesserCollision;
  pourcentageMortsCollision;
  pourcentageEstimationCollision;
  pourcentageAccidentRoute;
  pourcentageBlesserRoute;
  pourcentageMortsRoute;
  pourcentageEstimationRoute;
  public date1;
  public date2;
  public reseaux:string;
  public format;
  private subscription: Subscription;
  constructor(public rapportStatistiqueService: RapportStatistiqueService, public rapportFormatService: RapportFormatService,public toastr: ToastrService,
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
  
  
  runservice(){
if(this.reseaux=='bus'){
    this.rapportStatistiqueService.getEvaluationNbrAccidentCollisionBusParAnner(this.date1,this.date2)
    .subscribe(data=>{
this.nbrAccidentCollisionParAnner=data;
this.pourcentageAccidentCollision=this.nbrAccidentCollisionParAnner[1].nbrAccident-this.nbrAccidentCollisionParAnner[0].nbrAccident;
this.pourcentageBlesserCollision=this.nbrAccidentCollisionParAnner[1].nbrBlesser-this.nbrAccidentCollisionParAnner[0].nbrBlesser;
this.pourcentageMortsCollision=this.nbrAccidentCollisionParAnner[1].nbrMorts-this.nbrAccidentCollisionParAnner[0].nbrMorts; 
this.pourcentageEstimationCollision=this.nbrAccidentCollisionParAnner[1].estimationPrixDegat-this.nbrAccidentCollisionParAnner[0].estimationPrixDegat; 
    },err=>{
console.log(err);
    });
  }else if(this.reseaux=='metro'){
    this.rapportStatistiqueService.getEvaluationNbrAccidentCollisionMetrosParAnner(this.date1,this.date2)
    .subscribe(data=>{
this.nbrAccidentCollisionParAnner=data;
this.pourcentageAccidentCollision=this.nbrAccidentCollisionParAnner[1].nbrAccident-this.nbrAccidentCollisionParAnner[0].nbrAccident;
this.pourcentageBlesserCollision=this.nbrAccidentCollisionParAnner[1].nbrBlesser-this.nbrAccidentCollisionParAnner[0].nbrBlesser;
this.pourcentageMortsCollision=this.nbrAccidentCollisionParAnner[1].nbrMorts-this.nbrAccidentCollisionParAnner[0].nbrMorts; 
this.pourcentageEstimationCollision=this.nbrAccidentCollisionParAnner[1].estimationPrixDegat-this.nbrAccidentCollisionParAnner[0].estimationPrixDegat; 
    },err=>{
console.log(err);
    });
  }  else {
    this.rapportStatistiqueService.getEvaluationNbrAccidentCollisionTgmParAnner(this.date1,this.date2)
    .subscribe(data=>{
  this.nbrAccidentCollisionParAnner=data;
  this.pourcentageAccidentCollision=this.nbrAccidentCollisionParAnner[1].nbrAccident-this.nbrAccidentCollisionParAnner[0].nbrAccident;
this.pourcentageBlesserCollision=this.nbrAccidentCollisionParAnner[1].nbrBlesser-this.nbrAccidentCollisionParAnner[0].nbrBlesser;
this.pourcentageMortsCollision=this.nbrAccidentCollisionParAnner[1].nbrMorts-this.nbrAccidentCollisionParAnner[0].nbrMorts; 
this.pourcentageEstimationCollision=this.nbrAccidentCollisionParAnner[1].estimationPrixDegat-this.nbrAccidentCollisionParAnner[0].estimationPrixDegat; 
    },err=>{
  console.log(err);
    });
  }
 

   
if(this.reseaux=='bus'){
  this.rapportStatistiqueService.getEvaluationNbrAccidentRouteBusParAnner(this.date1,this.date2)
  .subscribe(data=>{
this.nbrAccidentRouteParAnner=data;
this.pourcentageAccidentRoute=this.nbrAccidentRouteParAnner[1].nbrAccident-this.nbrAccidentRouteParAnner[0].nbrAccident;
this.pourcentageBlesserRoute=this.nbrAccidentRouteParAnner[1].nbrBlesser-this.nbrAccidentRouteParAnner[0].nbrBlesser;
this.pourcentageMortsRoute=this.nbrAccidentRouteParAnner[1].nbrMorts-this.nbrAccidentRouteParAnner[0].nbrMorts; 
this.pourcentageEstimationRoute=this.nbrAccidentRouteParAnner[1].estimationPrixDegat-this.nbrAccidentRouteParAnner[0].estimationPrixDegat; 
  },err=>{
console.log(err);
  });
}else if(this.reseaux=='metro'){
  this.rapportStatistiqueService.getEvaluationNbrAccidentRouteMetrosParAnner(this.date1,this.date2)
  .subscribe(data=>{
this.nbrAccidentRouteParAnner=data;
this.pourcentageAccidentRoute=this.nbrAccidentRouteParAnner[1].nbrAccident-this.nbrAccidentRouteParAnner[0].nbrAccident;
this.pourcentageBlesserRoute=this.nbrAccidentRouteParAnner[1].nbrBlesser-this.nbrAccidentRouteParAnner[0].nbrBlesser;
this.pourcentageMortsRoute=this.nbrAccidentRouteParAnner[1].nbrMorts-this.nbrAccidentRouteParAnner[0].nbrMorts; 
this.pourcentageEstimationRoute=this.nbrAccidentRouteParAnner[1].estimationPrixDegat-this.nbrAccidentRouteParAnner[0].estimationPrixDegat; 
  },err=>{
console.log(err);
  });
} else {
  this.rapportStatistiqueService.getEvaluationNbrAccidentRouteTgmParAnner(this.date1,this.date2)
  .subscribe(data=>{
this.nbrAccidentRouteParAnner=data;
this.pourcentageAccidentRoute=this.nbrAccidentRouteParAnner[1].nbrAccident-this.nbrAccidentRouteParAnner[0].nbrAccident;
this.pourcentageBlesserRoute=this.nbrAccidentRouteParAnner[1].nbrBlesser-this.nbrAccidentRouteParAnner[0].nbrBlesser;
this.pourcentageMortsRoute=this.nbrAccidentRouteParAnner[1].nbrMorts-this.nbrAccidentRouteParAnner[0].nbrMorts; 
this.pourcentageEstimationRoute=this.nbrAccidentRouteParAnner[1].estimationPrixDegat-this.nbrAccidentRouteParAnner[0].estimationPrixDegat; 
  },err=>{
console.log(err);
  });
}


    
}

runExcelc(){
  this.format="excel"
  if(this.reseaux=="bus"){
  this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionBusParAnner(this.format,this.date1,this.date2).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
  }
  if(this.reseaux=="metro"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionMetrosParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="tgm"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionTgmParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
}
runCsvc(){
  this.format="csv"
  if(this.reseaux=="bus"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionBusParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="metro"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionMetrosParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
      if(this.reseaux=="tgm"){
        this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionTgmParAnner(this.format,this.date1,this.date2).subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
        }
}
runPdfc(){
  this.format="pdf"
  if(this.reseaux=="bus"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionBusParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="metro"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionMetrosParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
      if(this.reseaux=="tgm"){
        this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionTgmParAnner(this.format,this.date1,this.date2).subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
        }
}
runWordc(){
  this.format="docx"
  if(this.reseaux=="bus"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionBusParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="metro"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionMetrosParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
      if(this.reseaux=="tgm"){
        this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionTgmParAnner(this.format,this.date1,this.date2).subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
        }
}
runHtmlc(){
  this.format="html"
  if(this.reseaux=="bus"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionBusParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="metro"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionMetrosParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
      if(this.reseaux=="tgm"){
        this.rapportFormatService.getRreportEvaluationNbrAccidentCollisionTgmParAnner(this.format,this.date1,this.date2).subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
        }
}
 

runExcelr(){
  this.format="excel"
  if(this.reseaux=="bus"){
  this.rapportFormatService.getRreportEvaluationNbrAccidentRouteBusParAnner(this.format,this.date1,this.date2).subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error));
  }
  if(this.reseaux=="metro"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentRouteMetrosParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="tgm"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentRouteTgmParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
}
runCsvr(){
  this.format="csv"
  if(this.reseaux=="bus"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentRouteBusParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="metro"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentRouteMetrosParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
      if(this.reseaux=="tgm"){
        this.rapportFormatService.getRreportEvaluationNbrAccidentRouteTgmParAnner(this.format,this.date1,this.date2).subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
        }
}
runPdfr(){
  this.format="pdf"
  if(this.reseaux=="bus"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentRouteBusParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="metro"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentRouteMetrosParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
      if(this.reseaux=="tgm"){
        this.rapportFormatService.getRreportEvaluationNbrAccidentRouteTgmParAnner(this.format,this.date1,this.date2).subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
        }
}
runWordr(){
  this.format="docx"
  if(this.reseaux=="bus"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentRouteBusParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="metro"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentRouteMetrosParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
      if(this.reseaux=="tgm"){
        this.rapportFormatService.getRreportEvaluationNbrAccidentRouteTgmParAnner(this.format,this.date1,this.date2).subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
        }
}
runHtmlr(){
  this.format="html"
  if(this.reseaux=="bus"){
    this.rapportFormatService.getRreportEvaluationNbrAccidentRouteBusParAnner(this.format,this.date1,this.date2).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    }
    if(this.reseaux=="metro"){
      this.rapportFormatService.getRreportEvaluationNbrAccidentRouteMetrosParAnner(this.format,this.date1,this.date2).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
      }
      if(this.reseaux=="tgm"){
        this.rapportFormatService.getRreportEvaluationNbrAccidentRouteTgmParAnner(this.format,this.date1,this.date2).subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
        }
}

chercher() {
  const tab1 = document.getElementById('tab1');
  tab1.style.display = "block";
  
  const tab2 = document.getElementById('tab2');
  tab2.style.display = "block";

  this.runservice();
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
