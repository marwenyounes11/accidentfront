import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SourceDeclareHuissierService {

  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    parametres = new HttpParams();
    constructor(private http: HttpClient) { }
   
    getSourceDeclareHuissiers(): Observable<any> {
  
      return this.http.get('http://localhost:8989/listsourcedeclarehuissiers');
    }

    getSourceDeclareHuissierPaginationMc(mc :any,page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('mc', mc);
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/sourcedeclarehuissierpaginationmc`, { params: this.parametres });
    }
  
    getSourceDeclareHuissierPagination(page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/sourcedeclarehuissierpagination`, { params: this.parametres });
    }

    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/sourceDeclareHuissiers/${id}`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/sourceDeclareHuissiers', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/sourceDeclareHuissiers/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/sourceDeclareHuissiers/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/sourceDeclareHuissiers');
    }
}
