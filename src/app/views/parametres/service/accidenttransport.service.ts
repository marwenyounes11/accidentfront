
import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccidentTransport} from '../model/accidenttransport'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AccidentDto } from '../components/dto/accidentdto';
@Injectable({
  providedIn: 'root'
})
export class AccidentTransportService {
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  public accidentTransport;
  public dataForm:  FormGroup; 
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  getAccidentsTransportPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/accidenttransportspagination`, { params: this.parametres });
  }
  getAccidentsTransport(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/listaccidenttransports`);
  }

  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/accidentTransports/${id}?projection=p6`);
  }
 
  createData(accidenttransport): Observable<any> {
    return this.http.post(`http://localhost:8989/addaccidenttransports`, accidenttransport);
  }
  
  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editaccidenttransports/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deleteaccidenttransports/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/accidentTransports?projection=p6`);
  }
  deleteAll(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/accidentTransports/delete`, { responseType: 'text' });
  }
  

 
}
