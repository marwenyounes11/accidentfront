import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RapportAccidentCollisionRouteService {

  public host :string ="http://localhost:8989"
  constructor(private http :HttpClient) { }
  
  public getAccidentBus(): Observable<any>{
     return this.http.get(`http://localhost:8989/accidentsbus`);
  }
  
  public getAccidentMetros(): Observable<any>{
    return this.http.get(`http://localhost:8989/accidentsmetros`);
 }

}
