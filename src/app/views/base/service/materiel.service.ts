import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { AccidentDto } from '../components/dto/accidentdto';
@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  public listData ;
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 
  

  getMateriel(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/materiels/${id}?projection=p15`);
  }
 
  createExtincteur(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addextincteur`, formData);
  }
  createBoucheIncendie(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addboucheincendie`, formData);
  }
  createRobinetIncendie(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addrobinetincendie`, formData);
  }
  createPoteauxIncendie(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addpoteauxincendie`, formData);
  }
  updateExtincteur(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editextincteur/${id}`, value);
  }
  updateBoucheIncendie(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editboucheincendie/${id}`, value);
  }
  updateRobinetIncendie(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editrobinetincendie/${id}`, value);
  }
  updatePoteauxIncendie(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editpoteauxincendie/${id}`, value);
  }
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deletemateriels/${id}`, { responseType: 'text' });
  }
  

  getMateriels(): Observable<any> {
    return this.http.get(`http://localhost:8989/materiels?projection=p15`);
  }

 
  deleteAll(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8989/materiels/delete`, { responseType: 'text' });
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

