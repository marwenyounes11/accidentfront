import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { NbrMortsParDate } from '../../model/nbrmortspardate';
@Component({
  selector: 'app-nbrmortspardate',
  templateUrl: './nbrmortspardate.component.html',
  styleUrls: ['./nbrmortspardate.component.css']
})
export class NbrMortsParDateComponent implements OnInit {
  public nbrMortsParDate: NbrMortsParDate[] = [];
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =[];
  public nbmort: number[] = [];
  public datachart: number[] = [0];
  public date: string[] = [];
  public labelchart: string[] = [''];
 constructor(public rapportStatistiqueService: RapportStatistiqueService) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
     createChart()
   {
    this.nbmort=this.nbrMortsParDate.map(x => x.nbrMorts);
    this.date= this.nbrMortsParDate.map(x => x.dateAccident);
    this.nbmort.forEach( nbm =>{
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
             label: ' nombre morts par date',
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
   
     return this.rapportStatistiqueService.getNbrMortsParDate().subscribe(data =>
     {
       console.log(data);
       
       this.nbrMortsParDate = data ;
       
       this.createChart();
     });
   }
   
}
