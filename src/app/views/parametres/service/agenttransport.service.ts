
import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccidentTransport} from '../model/accidenttransport'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AccidentDto } from '../components/dto/accidentdto';
@Injectable({
  providedIn: 'root'
})
export class AgentTransportService {
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  public agentTransport;
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 
  

  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/agentTransports/${id}?projection=p7`);
  }
 
  createData(agenttransport): Observable<any> {
    return this.http.post(`http://localhost:8989/saveagenttransports`, agenttransport);
  }
  
  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editagenttransports/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deleteagenttransports/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/agentTransports?projection=p7`);
  }
  deleteAll(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/agenttransports/delete`, { responseType: 'text' });
  }
  

 
}
