import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class VictimeService {

  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    parametres = new HttpParams();
    constructor(private http: HttpClient) { }
   
    
  
    getVictimePaginationMc(mc :any,page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('mc', mc);
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/victimepaginationmc`, { params: this.parametres });
    }
  
    getVictimePagination(page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/victimepagination`, { params: this.parametres });
    }

    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/victime/${id}`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/addvictimes', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/editvictimes/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/deletevictimes/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/listvictimes');
    }
}
