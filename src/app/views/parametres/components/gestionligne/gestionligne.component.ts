import { Component, OnInit ,Inject} from '@angular/core';
import { LigneService} from '../../service/ligne.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { Ligne} from '../../model/ligne';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-gestionligne',
  templateUrl: './gestionligne.component.html',
  styleUrls: ['./gestionligne.component.css']
})
export class GestionLigneComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  lignes;
  page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
  constructor(public crudApi: LigneService ,public fb: FormBuilder,public toastr: ToastrService,
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Ligne';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            nameLigne: res.nameLigne,
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Ligne';
    }
   this.infoForm();
    
    
  }
  
  retrieveLignes(): void {
    let p = this.page1-1;
    
    this.crudApi.getLignePagination( p, this.pageSize1).subscribe(
      response =>{this.lignes = response;
        this.crudApi.getAll().subscribe(
         
          r =>{
            console.log(r.length);
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
      nameLigne:  ['', [ RxwebValidators.compose({
        validators:[
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{'name': /^[a-zA-Z]+[-]?[a-zA-Z0-9]+$/} })
        ]})]],
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
        nameLigne: [''],
          });
      }
     
 
      getData() {
        this.crudApi.getAll().subscribe(
          response =>{this.lignes = response;}
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
    const ligne= this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,ligne).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveLignes();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionligne']); 
        });
      } else {
        this.crudApi.createData(ligne).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.retrieveLignes();
          this.initForm();
          this.router.navigate(['/home/parametres/gestionligne']); 
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
