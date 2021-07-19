import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { NbrBlesserParNiveauBlessure } from '../../model/nbrblesserparniveaublessure';
@Component({
  selector: 'app-nbrblesserparniveaublessure',
  templateUrl: './nbrblesserparniveaublessure.component.html',
  styleUrls: ['./nbrblesserparniveaublessure.component.css']
})
export class NbrBlesserParNiveauBlessureComponent implements OnInit{
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =['green'];
  public nblesser: number[] = [];
  public datachart: number[] = [0];
  public nvblesser: string[] = [];
  public labelchart: string[] = [''];
  public blesser: NbrBlesserParNiveauBlessure[] = [];
 constructor(public rapportStatistiqueService: RapportStatistiqueService, public toastr: ToastrService,
  private router : Router,public fb: FormBuilder,) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
     createChart()
   {
     this.nblesser=this.blesser.map(x => x.nbrBlesser);
     this.nvblesser= this.blesser.map(x => x.niveauBlessure);
     this.nblesser.forEach( nbl =>{
     this.datachart.push(nbl);
      });
      this.nvblesser.forEach( cbl =>{
        this.labelchart.push(cbl);
         });
         for (let i = 1; i < this.datachart.length; i++) {
          this.colorchart[i]=this.color[i];
        }
     this.chart = new Chart('canvas', {
       type: 'bar',
       data: {
         labels: this.labelchart,
         datasets: [
           {
             label: 'nombre blesser par niveaux blessure',
             data: this.datachart,
             backgroundColor: this.colorchart
             
           }
         ]
       },
       });
   }


  
 loadData()
   {
   
     return this.rapportStatistiqueService.getNbrBlesserParNiveauBlessure().subscribe(data =>
     {
       console.log(data);
       
       this.blesser = data ;
       
       this.createChart();
     });
   }
   
}
