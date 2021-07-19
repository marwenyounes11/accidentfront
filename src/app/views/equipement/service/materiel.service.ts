import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  host :string = "http://localhost:8989";
  choixmenu : string  = 'A';
  public listData ;
  public dataForm1:  FormGroup; 
  public dataForm2:  FormGroup; 
  public dataForm3:  FormGroup; 
  public dataForm4:  FormGroup; 
  headers: HttpHeaders;
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  getExtincteurPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/extincteurpaginationmc`, { params: this.parametres });
  }

  getExtincteurPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/extincteurpagination`, { params: this.parametres });
  }
  getExtincteur(): Observable<any> {
    return this.http.get(`http://localhost:8989/listextincteur`);
  }

  getPoteauxPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/poteauxpaginationmc`, { params: this.parametres });
  }

  getPoteauxPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/poteauxpagination`, { params: this.parametres });
  }
  getPoteaux(): Observable<any> {
    return this.http.get(`http://localhost:8989/listpoteaux`);
  }

  getRobinetPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/robinetpaginationmc`, { params: this.parametres });
  }

  getRobinetPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/robinetpagination`, { params: this.parametres });
  }
  getRobinet(): Observable<any> {
    return this.http.get(`http://localhost:8989/listrobinet`);
  }

  getBouchePaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/bouchepaginationmc`, { params: this.parametres });
  }

  getBouchePagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/bouchepagination`, { params: this.parametres });
  }
  getBouche(): Observable<any> {
    return this.http.get(`http://localhost:8989/listbouche`);
  }

  getMateriel(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/materiels/${id}`);
  }
 
  createExtincteur(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addextincteur`, formData,{ headers: this.headers });
  }
  createBoucheIncendie(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addboucheincendie`, formData,{ headers: this.headers });
  }
  createRobinetIncendie(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addrobinetincendie`, formData,{ headers: this.headers });
  }
  createPoteauxIncendie(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8989/addpoteauxincendie`, formData,{ headers: this.headers });
  }
  updateExtincteur(id: number, formData: FormData): Observable<any> {
    return this.http.put(`http://localhost:8989/editextincteur/${id}`, formData,{ headers: this.headers });
  }
  updateBoucheIncendie(id: number, formData: FormData): Observable<any> {
    return this.http.put(`http://localhost:8989/editboucheincendie/${id}`, formData,{ headers: this.headers });
  }
  updateRobinetIncendie(id: number, formData: FormData): Observable<any> {
    return this.http.put(`http://localhost:8989/editrobinetincendie/${id}`, formData,{ headers: this.headers });
  }
  updatePoteauxIncendie(id: number, formData: FormData): Observable<any> {
    return this.http.put(`http://localhost:8989/editpoteauxincendie/${id}`, formData,{ headers: this.headers });
  }
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deletemateriels/${id}`, { responseType: 'text' });
  }
  

  getMateriels(): Observable<any> {
    return this.http.get(`http://localhost:8989/materiels?projection=p15`);
  }

  getData(): Observable<any> {
    return this.http.get(`http://localhost:8989/listmateriels`);
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

