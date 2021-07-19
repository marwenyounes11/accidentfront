import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { EstimationPrixDegatParDate } from '../../model/estimationprixdegatpardate';
@Component({
  selector: 'app-estimationprixdegatpardate',
  templateUrl: './estimationprixdegatpardate.component.html',
  styleUrls: ['./estimationprixdegatpardate.component.css']
})
export class EstimationPrixDegatParDateComponent implements OnInit {
  public estimationPrixDegatParDate: EstimationPrixDegatParDate[] = [];
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =[];
  public estimationdegat: number[] = [];
  public datachart: number[] = [];
  public date: string[] = [];
  public labelchart: string[] = [];
 constructor(public rapportStatistiqueService: RapportStatistiqueService) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
     createChart()
   {
    this.estimationdegat=this.estimationPrixDegatParDate.map(x => x.estimationPrixDegat);
    this.date= this.estimationPrixDegatParDate.map(x => x.dateAccident);
    this.estimationdegat.forEach( nbm =>{
    this.datachart.push(nbm);
     });
     this.date.forEach( d =>{
       this.labelchart.push(d);
        });
        for (let i = 0; i < this.datachart.length; i++) {
         this.colorchart[i]=this.color[i];
       }
     this.chart = new Chart('canvas', {
       type: 'doughnut',
       data: {
         labels: this.labelchart,
         datasets: [
           {
             label: ' estimation prix degat par date',
             data: this.datachart,
             backgroundColor: this.colorchart
             
           }
         ]
       },
       });
   }
 
 loadData()
   {
   
     return this.rapportStatistiqueService.getEstimationPrixDegatParDate().subscribe(data =>
     {
       console.log(data);
       
       this.estimationPrixDegatParDate = data ;
       
       this.createChart();
     });
   }
   
}
