import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AmbulancierService {

  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    parametres = new HttpParams();
    constructor(private http: HttpClient) { }
   
    getAmbulanciersPaginationMc(mc :any,page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('mc', mc);
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/ambulancierspaginationmc`, { params: this.parametres });
    }
  
    getAmbulanciersPagination(page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/ambulancierspagination`, { params: this.parametres });
    }
    getAmbulanciers(): Observable<any> {
      return this.http.get(`http://localhost:8989/listambulanciers`);
    }
   
   
    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/ambulanciers/${id}?projection=p11`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/addambulanciers', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/editambulanciers/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/deleteambulancier/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/ambulanciers?projection=p11');
    }
}
