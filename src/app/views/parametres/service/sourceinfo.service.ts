import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { SourceInform } from '../model/sourceinform';

@Injectable({
  providedIn: 'root'
})
export class SourceInfoService {
  choixmenu : string  = 'A';
  listData : SourceInform[];
  public dataForm:  FormGroup; 
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  getSourceInfos(): Observable<any> {
  
    return this.http.get('http://localhost:8989/listsourceInforms');
  }

  getSourceInfoPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/sourceinformpaginationmc`, { params: this.parametres });
  }

  getSourceInfoPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/sourceinformpagination`, { params: this.parametres });
  }
 
  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/sourceInforms/${id}`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post('http://localhost:8989/sourceInforms', info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8989/sourceInforms/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/sourceInforms/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
  
    return this.http.get('http://localhost:8989/sourceInforms');
  }
 
}
