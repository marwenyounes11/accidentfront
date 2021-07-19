import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Droit } from '../model/droit';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    constructor(private http: HttpClient) { }
   
   
    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/roles/${id}`);
    }
   
    getRole(name): Observable<any> {
      return this.http.get(`http://localhost:8989/roles/name/${name}`);
    }

    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/roles', info, { responseType: 'text' });
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/roles/${id}`, value, { responseType: 'text' });
    }
    
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/roles/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/roles');
    }
}
