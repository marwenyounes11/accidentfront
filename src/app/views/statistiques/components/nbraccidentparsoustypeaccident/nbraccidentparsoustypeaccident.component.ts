import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { NbrAccidentParSousTypeAccident } from '../../model/nbraccidentparsoustypeaccident';
@Component({
  selector: 'app-nbraccidentparsoustypeaccident',
  templateUrl: './nbraccidentparsoustypeaccident.component.html',
  styleUrls: ['./nbraccidentparsoustypeaccident.component.css']
})
export class NbrAccidentParSousTypeAccidentComponent implements OnInit {
  public nbrAccidentParSousTypeAccident: NbrAccidentParSousTypeAccident[] = [];
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =[];
  public nbaccident: number[] = [];
  public datachart: number[] = [];
  public soustypeaccident: string[] = [];
  public labelchart: string[] = [];
 constructor(public rapportStatistiqueService: RapportStatistiqueService) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
 createChart()
 {
  this.nbaccident=this.nbrAccidentParSousTypeAccident.map(x => x.nbrAccident);
  this.soustypeaccident= this.nbrAccidentParSousTypeAccident.map(x => x.subType);
  this.nbaccident.forEach( nbm =>{
    this.datachart.push(nbm);
     });
     this.soustypeaccident.forEach( d =>{
      this.labelchart.push(d);
       });
   for (let i = 0; i < this.datachart.length; i++) {
     this.colorchart[i]=this.color[i];
   }
   this.chart = new Chart('canvas', {
     type: 'polarArea',
     data: {
       labels: this.labelchart,
       datasets: [
         {
           label: ' nombre accident par sous type accident ',
           data: this.datachart,
           backgroundColor:  this.colorchart,
           
         }
       ]
     },
     });
 }
 
 loadData()
   {
   
     return this.rapportStatistiqueService.getNbrAccidentParSousTypeAccident().subscribe(data =>
     {
       console.log(data);
       
       this.nbrAccidentParSousTypeAccident = data ;
       
       this.createChart();
     });
   }
   
}
