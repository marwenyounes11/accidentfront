import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Degat} from '../model/degat'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { DegatDto } from '../components/dto/degatdto';

@Injectable({
  providedIn: 'root'
})
export class DegatService {

  choixmenu : string  = 'A';
    listData : Degat[];
    public dataForm1:  FormGroup; 
    public dataForm2:  FormGroup; 
    parametres = new HttpParams();
    constructor(private http: HttpClient) { }
   
    getDegatMaterielsPagination(page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/degatmaterielspagination`, { params: this.parametres });
    }
  
    
  
    getDegatPhysiquesPagination(page :any,size :any): Observable<any> {
      this.parametres = this.parametres.set('page', page);
      this.parametres = this.parametres.set('size', size);
      return this.http.get(`http://localhost:8989/degatphysiquespagination`, { params: this.parametres });
    }
   
    getDegat(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/degats/${id}?projection=p3`);
    }
   
    createDegatMateriel(info): Observable<any> {
      return this.http.post('http://localhost:8989/adddegatmateriels', info);
    }
    
    updateDegatMateriel(id: number, value: any): Observable<any> {
      return this.http.put(`http://localhost:8989/editdegatmateriels/${id}`, value);
    }
   
    
  
    createDegatPhysique(info): Observable<any> {
      return this.http.post('http://localhost:8989/adddegatphysiques', info);
    }
    
    updateDegatPhysique(id: number, value: any): Observable<any> {
      return this.http.put(`http://localhost:8989/editdegatphysiques/${id}`, value);
    }
   
    deleteDegat(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/deletedegats/${id}`, { responseType: 'text' });
    }
  
    getDegats(): Observable<any> {
    
      return this.http.get('http://localhost:8989/listdegats');
    }

    getDegatPhysiques(): Observable<any> {
    
      return this.http.get('http://localhost:8989/degatphysiques');
    }

    getDegatMateriels(): Observable<any> {
    
      return this.http.get('http://localhost:8989/degatmateriels');
    }
    getDegatPhysique(id: number): Observable<any> {
    
      return this.http.get(`http://localhost:8989/degatphysique/${id}`);
    }

    getDegatMateriel(id: number): Observable<any> {
    
      return this.http.get(`http://localhost:8989/degatmateriel/${id}`);
    }
}
