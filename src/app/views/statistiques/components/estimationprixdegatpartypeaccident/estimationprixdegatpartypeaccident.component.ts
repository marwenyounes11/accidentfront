import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { EstimationPrixDegatParTypeAccident } from '../../model/estimationprixdegatpartypeaccident';
@Component({
  selector: 'app-estimationprixdegatpartypeaccident',
  templateUrl: './estimationprixdegatpartypeaccident.component.html',
  styleUrls: ['./estimationprixdegatpartypeaccident.component.css']
})
export class EstimationPrixDegatParTypeAccidentComponent implements OnInit {
  public estimationPrixDegatParTypeAccident: EstimationPrixDegatParTypeAccident[] = [];
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =[];
  public estimationdegat: number[] = [];
  public datachart: number[] = [];
  public soustype: string[] = [];
  public labelchart: string[] = [];
 constructor(public rapportStatistiqueService: RapportStatistiqueService) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
     createChart()
   {
    this.estimationdegat=this.estimationPrixDegatParTypeAccident.map(x => x.estimationPrixDegat);
    this.soustype= this.estimationPrixDegatParTypeAccident.map(x => x.type);
    this.estimationdegat.forEach( nbm =>{
    this.datachart.push(nbm);
     });
     this.soustype.forEach( d =>{
       this.labelchart.push(d);
        });
        for (let i = 0; i < this.datachart.length; i++) {
         this.colorchart[i]=this.color[i];
       }
     this.chart = new Chart('canvas', {
       type: 'radar',
       data: {
         labels: this.labelchart,
         datasets: [
           {
             label: ' estimation prix degat par type accident',
             data: this.datachart,
             backgroundColor: this.colorchart
             
           }
         ]
       },
       });
   }
 
 loadData()
   {
   
     return this.rapportStatistiqueService.getEstimationPrixDegatParTypeAccident().subscribe(data =>
     {
       console.log(data);
       
       this.estimationPrixDegatParTypeAccident = data ;
       
       this.createChart();
     });
   }
   
}
