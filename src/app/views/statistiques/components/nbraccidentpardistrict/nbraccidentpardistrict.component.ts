import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { NbrAccidentParDistrict } from '../../model/nbraccidentpardistrict';
@Component({
  selector: 'app-nbraccidentpardistrict',
  templateUrl: './nbraccidentpardistrict.component.html',
  styleUrls: ['./nbraccidentpardistrict.component.css']
})
export class NbrAccidentParDistrictComponent implements OnInit {
  public nbrAccidentParDistrict: NbrAccidentParDistrict[] = [];
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =[];
  public nbaccident: number[] = [];
  public datachart: number[] = [];
  public district: string[] = [];
  public labelchart: string[] = [];
 constructor(public rapportStatistiqueService: RapportStatistiqueService) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
 createChart()
 {
  this.nbaccident=this.nbrAccidentParDistrict.map(x => x.nbrAccident);
  this.district= this.nbrAccidentParDistrict.map(x => x.nameDistrict);
  this.nbaccident.forEach( nbm =>{
    this.datachart.push(nbm);
     });
     this.district.forEach( d =>{
      this.labelchart.push(d);
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
           label: ' nombre accident par district ',
           data: this.datachart,
           backgroundColor:  this.colorchart,
           
         }
       ]
     },
     });
 }
 
 loadData()
   {
   
     return this.rapportStatistiqueService.getNbrAccidentParDistrict().subscribe(data =>
     {
       console.log(data);
       
       this.nbrAccidentParDistrict = data ;
       
       this.createChart();
     });
   }
   
}
