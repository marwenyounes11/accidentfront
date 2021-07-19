import { Component, OnInit ,Inject, OnDestroy} from '@angular/core';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RapportStatistiqueService } from '../../../rapports/service/rapportstatistique.service';
import { NbrBlesserExterne } from '../../model/nbrblesserexterne';
@Component({
  selector: 'app-nbrblesserexterne',
  templateUrl: './nbrblesserexterne.component.html',
  styleUrls: ['./nbrblesserexterne.component.css']
})
export class NbrBlesserExterneComponent implements OnInit{
  chart: Chart;
  public color: string[] = ['red','green','blue','black','yellow','orange','pink','brown','violet','grey','light blue','dark green','purple'];
  public colorchart: string[] =['green'];
  public nblesser: number[] = [];
  public datachart: number[] = [0];
  public cblesser: string[] = [];
  public labelchart: string[] = [''];
  public blesser: NbrBlesserExterne[] = [];
 constructor(public rapportStatistiqueService: RapportStatistiqueService, public toastr: ToastrService,
  private router : Router,public fb: FormBuilder,) { }
 
 ngOnInit(): void {this.loadData()}
     
 
 
     createChart()
   {
     this.nblesser=this.blesser.map(x => x.nbrBlesser);
     this.cblesser= this.blesser.map(x => x.corpBlesser);
     this.nblesser.forEach( nbl =>{
     this.datachart.push(nbl);
      });
      this.cblesser.forEach( cbl =>{
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
             label: 'nombre blesser externe',
             data: this.datachart,
             backgroundColor: this.colorchart
             
           }
         ]
       },
       });
   }
 
 loadData()
   {
   
     return this.rapportStatistiqueService.getNbrBlesserExterne().subscribe(data =>
     {
       console.log(data);
       
       this.blesser = data ;
       
       this.createChart();
     });
   }
   
}
