import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SousTypeAccident} from '../model/soustypeaccident'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SousTypeAccidentService {

  choixmenu : string  = 'A';
  listData : SousTypeAccident[];
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/sousTypeAccidents/${id}?projection=p2`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post('http://localhost:8989/addsousTypeAccidents', info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8989/editsousTypeAccidents/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deletesousTypeAccidents/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
  
    return this.http.get('http://localhost:8989/sousTypeAccidents?projection=p2');
  }
}
