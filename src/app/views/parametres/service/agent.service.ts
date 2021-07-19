import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent} from '../model/agent'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AgentService {
  parametres = new HttpParams();
  choixmenu : string  = 'A';
    listData : Agent[];
    public dataForm:  FormGroup; 
    constructor(private http: HttpClient) { }
   
    getAgentsPaginationMc(mc :any,page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('mc', mc);
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/agentspaginationmc`, { params: this.parametres });
    }
  
    getAgentsPagination(page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/agentspagination`, { params: this.parametres });
    }
    getAgents(): Observable<any> {
      return this.http.get(`http://localhost:8989/listagents`);
    }
    getData(id: number): Observable<Agent> {
      return this.http.get<Agent>(`http://localhost:8989/agents/${id}`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/agents', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/agents/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/agents/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/agents');
    }
}
