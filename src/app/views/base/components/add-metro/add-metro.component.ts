import { Component, OnInit ,Inject} from '@angular/core';
import { LigneService} from '../../service/ligne.service';
import { AgentService} from '../../service/agent.service';
import { DepotService} from '../../service/depot.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { MoyenTransportService } from '../../service/moyentransport.service';
import { DistrictService } from '../../service/district.service';


@Component({
  selector: 'app-add-metro',
  templateUrl: './add-metro.component.html',
  styleUrls: ['./add-metro.component.css']
})
export class AddMetroComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public agents;
  public lignes;
  public depots;
  public districts;
  public message: string;
  constructor(public crudApi: MoyenTransportService,public crudApiag: AgentService,public crudApil: LigneService,public crudApid:DepotService,public crudApidi:DistrictService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.crudApiag.getAll().subscribe(
      agents => {
        this.agents = agents;
      },
      error => this.error = <any>error
    );
    this.crudApil.getAll().subscribe(
      lignes => {
        this.lignes = lignes;
      },
      error => this.error = <any>error
    );
    this.crudApidi.getAll().subscribe(
      districts => {
        this.districts = districts;
      },
      error => this.error = <any>error
    );
    this.crudApid.getAll().subscribe(
      depots => {
        this.depots = depots;
      },
      error => this.error = <any>error
    );
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()
      this.pageTitle = 'Create Metro';
    } else {
      this.pageTitle = 'Update Metro';
    }
  }

  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: [''],
        gage: ['', [Validators.required]],
        immatriculation: ['', [Validators.required]],
        mark: ['', [Validators.required]],
        model: ['', [Validators.required]],
        numTransport: ['', [Validators.required]],
        type: ['', [Validators.required]],
        idagent: [''],
        idligne: [''],
        iddistrict: [''],
        iddepot: [''],
        });
    }
 
  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
    if (this.crudApi.choixmenu == "A")
    {
      this.addData();
    }
    else
    {
    this.updateData()
    }   
}

addData() {
  const metro = this.crudApi.dataForm.value;
  this.crudApi.createMetro(metro).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/base/moyentransports']); 
    });
}
  updateData()
  {
    this.crudApi.updateMetro(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/base/moyentransports']); 
    });
  }

}
