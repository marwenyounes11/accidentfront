import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RubriqueRoleService {

  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    constructor(private http: HttpClient) { }
   
   
    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/rubriqueRoles/${id}`);
    }
   
    getRubriqueRoles(role): Observable<any> {
      return this.http.get('http://localhost:8989/rubriqueRoles/role/'+role);
    }

    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/rubriqueRoles', info, { responseType: 'text' });
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/rubriqueRoles/${id}`, value, { responseType: 'text' });
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/rubriqueRoles/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/rubriqueRoles');
    }
}
