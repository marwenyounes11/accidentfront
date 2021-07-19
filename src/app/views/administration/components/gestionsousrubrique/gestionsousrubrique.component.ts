import { Component, OnInit ,Inject} from '@angular/core';
import { SousRubriqueService} from '../../service/sousrubrique.service'
import { RoleService} from '../../service/role.service'
import {SousRubriqueComponent} from './sousrubrique.component'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { RxwebValidators } from "@rxweb/reactive-form-validators"
import { RubriqueService } from '../../service/rubrique.service';


@Component({
  selector: 'app-gestionsousrubrique',
  templateUrl: './gestionsousrubrique.component.html',
  styleUrls: ['./gestionsousrubrique.component.css']
})
export class GestionSousRubriqueComponent implements OnInit {
  
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  public roles;
  submitted = false;
  sousrubriques;
  rubriques;
  constructor(public crudApi: SousRubriqueService ,public crudApr: RubriqueService ,public crudApir: RoleService,public fb: FormBuilder,public toastr: ToastrService,
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
    this.crudApr.getAll().subscribe(
      rubriques => {
        this.rubriques = rubriques;
      },
      error => this.error = <any>error
    );
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()
      this.pageTitle = 'Create SousRubrique';
    } else {
      this.pageTitle = 'Update SousRubrique';
    }
    
    
  }
  
  getData() {
    this.crudApi.getListSousRubriques().subscribe(
      response =>{this.sousrubriques = response;}
     );
   
  }
   
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: [''],
        libelle: ['', [ RxwebValidators.compose({
          validators:[
          RxwebValidators.required(),
          RxwebValidators.alpha()
          ]})]],
          idrubrique: ['', [ RxwebValidators.required()]],
    });
    }
   
    initForm() {
      this.crudApi.dataForm = this.fb.group({
        id: [''],
        libelle: [''],
        idrubrique: [''],
          });
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
        
       

    const sousrubrique = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        
        this.crudApi.updatedata(+id,sousrubrique).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.initForm();
          this.getData(); 
        });
      } else {
        this.crudApi.createData(sousrubrique).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.initForm();
          this.getData();

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
