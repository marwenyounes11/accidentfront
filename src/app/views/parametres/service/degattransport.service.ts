
import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DegatTransportService {
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  public accidentTransport;
  public dataForm:  FormGroup; 
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  
  getDegatTransportsPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/degattransportspagination`, { params: this.parametres });
  }

  

  getDegatTransports(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/degattransports`);
  }

  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/degattransport/${id}`);
  }
 
  createData(degattransport): Observable<any> {
    return this.http.post(`http://localhost:8989/adddegattransports`, degattransport);
  }
  
  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editdegattransports/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deletedegattransports/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/degattransports`);
  }
  deleteAll(): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/degattransports/delete`, { responseType: 'text' });
  }
  

 
}
