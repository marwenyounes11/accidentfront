import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class HuissierService {

  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    parametres = new HttpParams();
    constructor(private http: HttpClient) { }

    getHuissiers(): Observable<any> {
  
      return this.http.get('http://localhost:8989/listhuissiers');
    }

    getHuissiersPaginationMc(mc :any,page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('mc', mc);
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/huissierspaginationmc`, { params: this.parametres });
    }
  
    getHuissiersPagination(page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/huissierspagination`, { params: this.parametres });
    }
   
    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/huissiers/${id}?projection=p12`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/addhuissiers', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/edithuissiers/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/deletehuissiers/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/huissiers?projection=p12');
    }
}
