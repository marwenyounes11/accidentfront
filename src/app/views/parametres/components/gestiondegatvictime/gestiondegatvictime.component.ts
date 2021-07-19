import { Component, OnInit ,Inject} from '@angular/core';
import { DegatVictimeService} from '../../service/degatvictime.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { DegatService } from '../../service/degat.service';
import {VictimeService } from '../../service/victime.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-gestiondegatvictime',
  templateUrl: './gestiondegatvictime.component.html',
  styleUrls: ['./gestiondegatvictime.component.css']
})
export class GestionDegatVictimeComponent  implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public degats;
  public victimes;
  public degatvictimes;
  page1=1 ;
  count1 ;
  pageSize1 = 2;
  public message: string;
  submitted = false;
  constructor(public crudApi: DegatVictimeService,public crudApia: DegatService,public crudApiv: VictimeService ,public fb: FormBuilder,public toastr: ToastrService,
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

    this.crudApiv.getAll().subscribe(
      victimes => {
        this.victimes= victimes;
      },
      error => this.error = <any>error
    );
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Degat Victime';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            iddegat: res.degat.id,
            idvictime: res.victime.id,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Degat Victime';
    }
   this.infoForm();
    
    
  }
  
  retrieveDegatVictime(): void {
    let p = this.page1-1;
    
    this.crudApi.getDegatVictimesPagination( p, this.pageSize1).subscribe(
      response =>{this.degatvictimes = response;
        this.crudApi.getAll().subscribe(
         
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
        idvictime: ['', [ RxwebValidators.required()]],
        });
    }
   
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
          iddegat: [''],
          idvictime: [''],
          });
      }

      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.degatvictimes= response;}
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
    const degatvictime = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,degatvictime ).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveDegatVictime();
          this.initForm();
          this.router.navigate(['/home/parametres/gestiondegatvictime']); 
        });
      } else {
        this.crudApi.createData(degatvictime).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveDegatVictime();
          this.initForm();
          this.router.navigate(['/home/parametres/gestiondegatvictime']); 
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
