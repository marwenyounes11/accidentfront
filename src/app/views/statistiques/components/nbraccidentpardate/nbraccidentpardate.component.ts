import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { NbrAccidentParDate } from '../../model/nbraccidentpardate';
@Component({
  selector: 'app-nbraccidentpardate',
  templateUrl: './nbraccidentpardate.component.html',
  styleUrls: ['./nbraccidentpardate.component.css']
})
export class NbrAccidentParDateComponent implements OnInit {
  public nbrAccidentParDate: NbrAccidentParDate[] = [];
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =[];
  public nbaccident: number[] = [];
  public datachart: number[] = [0];
  public date: string[] = [];
  public labelchart: string[] = [''];
 constructor(public rapportStatistiqueService: RapportStatistiqueService) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
     createChart()
   {
    this.nbaccident=this.nbrAccidentParDate.map(x => x.nbrAccident);
    this.date= this.nbrAccidentParDate.map(x => x.dateAccident);
    this.nbaccident.forEach( nbm =>{
    this.datachart.push(nbm);
     });
     this.date.forEach( d =>{
       this.labelchart.push(d);
        });
        for (let i = 0; i < this.datachart.length; i++) {
         this.colorchart[i]=this.color[i];
       }
     this.chart = new Chart('canvas', {
       type: 'line',
       data: {
         labels: this.labelchart,
         datasets: [
           {
             label: ' nombre accident par date',
             data: this.datachart,
             backgroundColor: this.colorchart,
             borderColor: 'orange'
             
           }
         ]
       },
       });
   }
 
 loadData()
   {
   
     return this.rapportStatistiqueService.getNbrAccidentParDate().subscribe(data =>
     {
       console.log(data);
       
       this.nbrAccidentParDate = data ;
       
       this.createChart();
     });
   }
   
}
