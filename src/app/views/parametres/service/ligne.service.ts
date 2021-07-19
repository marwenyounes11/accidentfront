import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ligne} from '../model/ligne'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LigneService {
  choixmenu : string  = 'A';
  listData : Ligne[];
  public dataForm:  FormGroup; 
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  getLignePaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/lignepaginationmc`, { params: this.parametres });
  }

  getLignePagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/lignepagination`, { params: this.parametres });
  }
 
  getData(id: number): Observable<Ligne> {
    return this.http.get<Ligne>(`http://localhost:8989/lignes/${id}`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post('http://localhost:8989/lignes', info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8989/lignes/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/lignes/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
  
    return this.http.get('http://localhost:8989/lignes');
  }
  
}
