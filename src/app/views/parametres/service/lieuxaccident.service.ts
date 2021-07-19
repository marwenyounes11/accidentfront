import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LieuxAccident} from '../model/lieuxaccident'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LieuxAccidentService {

  choixmenu : string  = 'A';
  listData : LieuxAccident[];
  public dataForm:  FormGroup; 
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  

  getLieuxPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/lieuxpaginationmc`, { params: this.parametres });
  }

  getLieuxPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/lieuxpagination`, { params: this.parametres });
  }
  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/getLieux/${id}`);
  }
 
  createData(info: LieuxAccident): Observable<LieuxAccident> {
    return this.http.post<LieuxAccident>('http://localhost:8989/addLieux', info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8989/editLieux/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deleteLieux/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
  
    return this.http.get('http://localhost:8989/getLieux');
  }
}
