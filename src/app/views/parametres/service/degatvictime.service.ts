
import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DegatVictimeService {
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  public accidentTransport;
  public dataForm:  FormGroup; 
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  getDegatVictimesPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/degatvictimespagination`, { params: this.parametres });
  }

  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/degatvictimes/${id}`);
  }
 
  createData(degatvictime): Observable<any> {
    return this.http.post(`http://localhost:8989/adddegatvictimes`, degatvictime);
  }
  
  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editdegatvictimes/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deletedegatvictimes/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/degatvictimes`);
  }
  deleteAll(): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/degatvictimes/delete`, { responseType: 'text' });
  }
  

 
}
