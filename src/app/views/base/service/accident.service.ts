
import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accident} from '../model/accident'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AccidentDto } from '../components/dto/accidentdto';
@Injectable({
  providedIn: 'root'
})
export class AccidentService {
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  listData : Accident[];
  lastData : Accident[];
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 
  

  getAccident(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/accidents/${id}?projection=p1`);
  }
 
  createAccidentTravail(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addaccidenttravails`, formData);
  }
  createAccidentRoute(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addaccidentroutes`, formData);
  }
  createAccidentCollision(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addaccidentcollisions`, formData);
  }
  updateAccidentTravail(id: number, value: AccidentDto): Observable<AccidentDto> {
    return this.http.put<AccidentDto>(`http://localhost:8989/editaccidenttravails/${id}`, value);
  }
  updateAccidentRoute(id: number, value: AccidentDto): Observable<AccidentDto> {
    return this.http.put<AccidentDto>(`http://localhost:8989/editaccidentroutes/${id}`, value);
  }
  updateAccidentCollision(id: number, value: AccidentDto): Observable<AccidentDto> {
    return this.http.put<AccidentDto>(`http://localhost:8989/editaccidentcollisions/${id}`, value);
  }
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deleteaccidents/${id}`, { responseType: 'text' });
  }
  getAll(): Observable<any> {
    return this.http.get(`http://localhost:8989/listaccidents`);
  }

  getAccidents(): Observable<any> {
    return this.http.get(`http://localhost:8989/accidents?projection=p1&size=20`);
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
