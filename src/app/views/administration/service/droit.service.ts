import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class DroitService {
 

  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    constructor(private http: HttpClient) {
     
     }
   
     getListDroits(): Observable<any> {
    
      return this.http.get('http://localhost:8989/listdroits');
    }

    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/droits/${id}`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/adddroits', info, { responseType: 'text' });
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/droits/${id}`, value, { responseType: 'text' });
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/droits/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/droits');
    }
}
