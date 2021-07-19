import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { NbrAccidentParMoyenTransport } from '../../model/nbraccidentparmoyentransport';
@Component({
  selector: 'app-nbraccidentparmoyentransport',
  templateUrl: './nbraccidentparmoyentransport.component.html',
  styleUrls: ['./nbraccidentparmoyentransport.component.css']
})
export class NbrAccidentParMoyenTransportComponent implements OnInit {
  public nbrAccidentParMoyenTransport: NbrAccidentParMoyenTransport[] = [];
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =[];
  public nbaccident: number[] = [];
  public datachart: number[] = [];
  public moyentransport: string[] = [];
  public labelchart: string[] = [];
 
 constructor(public rapportStatistiqueService: RapportStatistiqueService) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
 createChart()
 {
  this.nbaccident=this.nbrAccidentParMoyenTransport.map(x => x.nbrAccident);
  this.moyentransport= this.nbrAccidentParMoyenTransport.map(x => x.type);
  this.nbaccident.forEach( nbm =>{
    this.datachart.push(nbm);
     });
     this.moyentransport.forEach( m =>{
      this.labelchart.push(m);
       });
  for (let i = 0; i < this.datachart.length; i++) {
     this.colorchart[i]=this.color[i];
   }
   this.chart = new Chart('canvas', {
     type: 'pie',
     data: {
       labels: this.labelchart,
       datasets: [
         {
           label: ' nombre accident par moyen transport ',
           data: this.datachart,
          backgroundColor: this.colorchart,
           
         }
       ]
     },
     });
 }
 
 loadData()
   {
   
     return this.rapportStatistiqueService.getNbrAccidentParMoyenTransport().subscribe(data =>
     {
       console.log(data);
       
       this.nbrAccidentParMoyenTransport = data ;
       
       this.createChart();
     });
   }
   
}
