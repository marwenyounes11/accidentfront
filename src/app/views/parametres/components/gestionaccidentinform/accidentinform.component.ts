import { Component, OnInit ,Inject, Input} from '@angular/core';
import { AccidentInformService} from '../../service/accidentinform.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { NotificationService } from '../../service/notification.service';


@Component({
  selector: 'app-accidentinform',
  templateUrl: './accidentinform.component.html',
  styleUrls: ['./accidentinform.component.css']
})
export class AccidentInformComponent implements OnInit {

  @Input() accidentinforms;
  @Input() ainforms;
  motcle1 = '';
  @Input() page1=1 ;
  @Input()  count1 ;
  @Input() pageSize1 = 2;
  pageSizes = [2,3,4,5,6]; 
  public notif={
    subject: '',
    text:''
  }
  constructor(public crudApin: NotificationService,public crudApi:AccidentInformService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.retrieveAccidentInform();
  }
  

  retrieveAccidentInformMc(): void {
    let p = this.page1-1;
    
    this.crudApi.getAccidentsInformPaginationMc(this.motcle1, p, this.pageSize1).subscribe(
      response =>{this.accidentinforms = response;
        this.crudApi.getAccidentsInform().subscribe(
         
          r =>{this.ainforms = r;
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  retrieveAccidentInform(): void {
    let p = this.page1-1;
    
    this.crudApi.getAccidentsInformPagination( p, this.pageSize1).subscribe(
      response =>{this.accidentinforms = response;
        this.accidentinforms.forEach(ai => {
          let dinfo=new Date(ai.dateInformation);
          let dateinfo = dinfo.getFullYear()+'-'+(dinfo.getMonth()+1)+'-'+dinfo.getDate();
          let d=new Date(ai.accident.dateAccident); 
          let dateacc = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
          let y=dinfo.getFullYear()-d.getFullYear();
          let m=dinfo.getMonth()+1-d.getMonth()+1;
          let day=dinfo.getDate()-d.getDate();
          console.log(dateinfo);
          console.log(dateacc);
          if(dateinfo>=dateacc){
           this.notif.subject="Retard Information";
           this.notif.text="il ya un retard d'information de " + y+ "années et de " + m + "mois et de " + day+ "jour";
            this.crudApin.createData(this.notif).subscribe( data => {
             
            });
          }
               
              }
            );
        this.crudApi.getAccidentsInform().subscribe(
         
          r =>{this.ainforms = r;
            this.count1 =r.length;
          },err=>{
            console.log(err);
              }
         );
        
        
      },err=>{
        console.log(err);
          }
     );

  }

  handlePageChange1(event): void {
    this.page1 = event;
    this.retrieveAccidentInform();
  }

  handlePageSizeChange1(event): void {
    this.pageSize1 = event.target.value;
    this.retrieveAccidentInform();
  }


  
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this accident inform ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.retrieveAccidentInform();
        },
        error => console.log(error));
  }
  }
  selectData(id ) {
    if (id) {
      this.crudApi.getData(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
            id:res.id,
            idaccident: res.accident.id,
            idsourceinform: res.sourceinform.id,
            dateInformation: res.dateInformation,
            heureInformation: res.heureInformation,
            description: res.description,
          });
          
        }
      );
  }
}
}
