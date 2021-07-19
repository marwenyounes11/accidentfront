import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AgentInterventionService {

  choixmenu : string  = 'A';
  public listData;
    public dataForm:  FormGroup; 
    parametres = new HttpParams();
    constructor(private http: HttpClient) { }
   
    getAgentInterventionsPaginationMc(mc :any,page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('mc', mc);
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/agentinterventionspaginationmc`, { params: this.parametres });
    }
  
    getAgentInterventionsPagination(page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/agentinterventionspagination`, { params: this.parametres });
    }
    getAgentInterventions(): Observable<any> {
      return this.http.get(`http://localhost:8989/listagentinterventions`);
    }

    getData(id: number): Observable<any> {
      return this.http.get<any>(`http://localhost:8989/agentInterventions/${id}`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/agentInterventions', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/agentInterventions/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/agentInterventions/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/agentInterventions');
    }
}
