import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeAccident} from '../model/typeaccident'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { TypeAccidentDto } from '../components/dto/typeaccidentdto';

@Injectable({
  providedIn: 'root'
})
export class TypeAccidentService {

  choixmenu : string  = 'A';
  listData : TypeAccident[];
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/typeAccidents/${id}`);
  }
 
  createData(info): Observable<any> {
    return this.http.post('http://localhost:8989/typeAccidents', info);
  }
  
  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/typeAccidents/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/typeAccidents/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
  
    return this.http.get('http://localhost:8989/typeAccidents');
  }
}
