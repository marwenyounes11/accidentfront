import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  choixmenu : string  = 'A';
  public listData ;
  public dataForm:  FormGroup; 
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  getDepartementsPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/departementspaginationmc`, { params: this.parametres });
  }

  getDepartementsPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/departementspagination`, { params: this.parametres });
  }
  getDepartements(): Observable<any> {
    return this.http.get(`http://localhost:8989/listdepartements`);
  }

  getData(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8989/departements/${id}?projection=p14`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post('http://localhost:8989/savedepartement', info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8989/editdepartement/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deletedepartement/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
  
    return this.http.get('http://localhost:8989/departements?projection=p14');
  }
}
