
import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccidentInfo} from '../model/accidentinfo'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AccidentDto } from '../components/dto/accidentdto';
@Injectable({
  providedIn: 'root'
})
export class AccidentInformService {
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  public accidentInform;
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 
  

  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/accidentInforms/${id}?projection=p5`);
  }
 
  createData(accidentinform): Observable<any> {
    return this.http.post(`http://localhost:8989/saveaccidentinforms`, accidentinform);
  }
  
  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editaccidentinforms/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deleteaccidentinforms/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/accidentInforms?projection=p5`);
  }
  deleteAll(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/accidents/delete`, { responseType: 'text' });
  }
  

 
}
