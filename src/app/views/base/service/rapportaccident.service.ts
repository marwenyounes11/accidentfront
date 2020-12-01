import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RapportAccidentService {

  public host :string ="http://localhost:8989"
  constructor(private http :HttpClient) { }

  public getAccidents(){
     return this.http.get(this.host+"/accidents");
  }
   
  getAccidentInforms(a){
    let url = a._links.accidentinforms.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p5");
   
  }

  getSourceInform(ai){
    return this.http.get(ai._links.sourceinform.href);
  }

  getAgentTranstus(si){
    let url = si._links.agenttranstus.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p9");
    
  }
    
  getAmbulanciers(si){
    let url = si._links.ambulanciers.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p11");
  }

  getSecurites(si){
    let url = si._links.securites.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p10");
  }
}
