import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  choixmenu : string  = 'A';
  public listData;
    public dataForm:  FormGroup; 
    constructor(private http: HttpClient) { }
   
   
    getData(id: number): Observable<any> {
      return this.http.get<any>(`http://localhost:8989/interventions/${id}`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/saveinterventions', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/editinterventions/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/deleteinterventions/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/interventions');
    }
}
