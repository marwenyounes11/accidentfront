
import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accident} from '../model/accident'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AccidentDto } from '../components/dto/accidentdto';
import { AuthStorageService } from '../../../services/auth-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AccidentService {
  parametres = new HttpParams();
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  listData : Accident[];
  lastData : Accident[];
  public dataForm1:  FormGroup; 
  public dataForm2:  FormGroup; 
  public dataForm3:  FormGroup; 
  headers: HttpHeaders;
  constructor(private http: HttpClient,private authStorageService: AuthStorageService) {
    
   }
 
  

  getAccident(id: number): Observable<Accident> {
    return this.http.get<Accident>(`http://localhost:8989/accident/${id}`);
  }
 
  createAccidentTravail(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addaccidenttravails`, formData, { headers: this.headers });
  }
  createAccidentRoute(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addaccidentroutes`, formData,{ headers: this.headers });
  }
  createAccidentCollision(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:8989/addaccidentcollisions', formData, { headers: this.headers });
  }
  updateAccidentTravail(id: number, formData: FormData): Observable<any> {
    return this.http.put(`http://localhost:8989/editaccidenttravails/${id}`, formData, { headers: this.headers });
  }
  updateAccidentRoute(id: number, formData: FormData): Observable<any> {
    return this.http.put(`http://localhost:8989/editaccidentroutes/${id}`, formData, { headers: this.headers });
  }
  updateAccidentCollision(id: number, formData: FormData): Observable<any> {
    return this.http.put(`http://localhost:8989/editaccidentcollisions/${id}`, formData, { headers: this.headers });
  }
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deleteaccidents/${id}`, { responseType: 'text' });
  }
  getAccidentsCollisionPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/listaccidentcollisionpaginationmc`, { params: this.parametres });
  }

  getAccidentsCollisionPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/listaccidentcollisionpagination`, { params: this.parametres });
  }

  getAccidentsRoutePaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/listaccidentroutepaginationmc`, { params: this.parametres });
  }

  getAccidentsRoutePagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/listaccidentroutepagination`, { params: this.parametres });
  }

  getAccidentsTravailPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/listaccidenttravailpaginationmc`, { params: this.parametres });
  }
  
  getAccidentsTravailPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/listaccidenttravailpagination`, { params: this.parametres });
  }

  getAccidentsCollision(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/listaccidentcollision`);
  }

  getAccidentsRoute(): Observable<any> {
    
    return this.http.get(`http://localhost:8989/listaccidentroute`);
  }

  getAccidentsTravail(): Observable<any> {
   
    return this.http.get(`http://localhost:8989/listaccidenttravail`);
  }

  getAccidents(): Observable<any> {
    return this.http.get(`http://localhost:8989/listaccidents`);
  }
  

 
  deleteAll(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8989/accidents/delete`, { responseType: 'text' });
  }
  

  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
}
