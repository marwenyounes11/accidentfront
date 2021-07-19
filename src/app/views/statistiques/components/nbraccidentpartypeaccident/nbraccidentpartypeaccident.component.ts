import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { NbrAccidentParTypeAccident } from '../../model/nbraccidentpartypeaccident';
@Component({
  selector: 'app-nbraccidentpartypeaccident',
  templateUrl: './nbraccidentpartypeaccident.component.html',
  styleUrls: ['./nbraccidentpartypeaccident.component.css']
})
export class NbrAccidentParTypeAccidentComponent implements OnInit {
  public nbrAccidentParTypeAccident: NbrAccidentParTypeAccident[] = [];
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =[];
  public nbaccident: number[] = [];
  public datachart: number[] = [];
  public typeaccident: string[] = [];
  public labelchart: string[] = [];
 constructor(public rapportStatistiqueService: RapportStatistiqueService) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
 createChart()
 {
  this.nbaccident=this.nbrAccidentParTypeAccident.map(x => x.nbrAccident);
  this.typeaccident= this.nbrAccidentParTypeAccident.map(x => x.type);
  this.nbaccident.forEach( nbm =>{
    this.datachart.push(nbm);
     });
     this.typeaccident.forEach( d =>{
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
           label: ' nombre accident par type accident ',
           data: this.datachart,
           backgroundColor:  this.colorchart,
           
         }
       ]
     },
     });
 }
 
 loadData()
   {
   
     return this.rapportStatistiqueService.getNbrAccidentParTypeAccident().subscribe(data =>
     {
       console.log(data);
       
       this.nbrAccidentParTypeAccident = data ;
       
       this.createChart();
     });
   }
   
}
