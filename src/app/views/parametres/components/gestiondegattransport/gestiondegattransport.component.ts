import { Component, OnInit ,Inject} from '@angular/core';
import { DegatTransportService} from '../../service/degattransport.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { DegatService } from '../../service/degat.service';
import {MoyenTransportService } from '../../service/moyentransport.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-gestiondegattransport',
  templateUrl: './gestiondegattransport.component.html',
  styleUrls: ['./gestiondegattransport.component.css']
})
export class GestionDegatTransportComponent  implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public degats;
  public moyentransports;
  public degattransports;
  public message: string;
  submitted = false;
  page1=1 ;
   count1 ;
   pageSize1 = 2;
  constructor(public crudApi: DegatTransportService,public crudApia: DegatService,public crudApit: MoyenTransportService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
    isCollapsed1: boolean = false;
  isCollapsed2: boolean = false;
  iconCollapse: string = 'icon-arrow-up';
  isClose1: boolean = false;
  isClose2: boolean = false;
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse1(): void {
    this.isCollapsed1 = !this.isCollapsed1;
    this.iconCollapse = this.isCollapsed1 ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  toggleCollapse2(): void {
    this.isCollapsed2 = !this.isCollapsed2;
    this.iconCollapse = this.isCollapsed2 ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  get f() { return this.crudApi.dataForm.controls; }
  ngOnInit() {
    this.crudApia.getDegats().subscribe(
      degats => {
        this.degats = degats;
      },
      error => this.error = <any>error
    );

    this.crudApit.getAll().subscribe(
      moyentransports => {
        this.moyentransports= moyentransports;
      },
      error => this.error = <any>error
    );
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Degat Transport';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            iddegat: res.degat.id,
            idtransport: res.moyentransport.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Degat Transport';
    }
   this.infoForm();
    
    
  }
  
  retrieveDegatTransport(): void {
    let p = this.page1-1;
    
    this.crudApi.getDegatTransportsPagination( p, this.pageSize1).subscribe(
      response =>{this.degattransports = response;
        this.crudApi.getDegatTransports().subscribe(
         
          r =>{
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
   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        iddegat: ['', [ RxwebValidators.required()]],
        idtransport: ['', [ RxwebValidators.required()]],
        });
    }
   
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
          iddegat: [''],
          idtransport: [''],
          });
      }

      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.degattransports= response;}
         );
       
      }

    ResetForm() {
      this.submitted = false;
        this.crudApi.dataForm.reset();
    }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.crudApi.dataForm.invalid) {
        return;
    }
    const degattransport = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,degattransport ).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveDegatTransport();
          this.initForm();
          this.router.navigate(['/home/parametres/gestiondegattransport']); 
        });
      } else {
        this.crudApi.createData(degattransport).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveDegatTransport();
          this.initForm();
          this.router.navigate(['/home/parametres/gestiondegattransport']); 
        });
      }
}
close1() {
  this.isClose1 = !this.isClose1;
  const card = document.getElementById('id1');
  if (this.isClose1 )
  {
  card.style.display = "none";
  
}
}
  
close2() {
  this.isClose2 = !this.isClose2;
  const card = document.getElementById('id2');
  if (this.isClose2 )
  {
  card.style.display = "none";
  
}
}
}
