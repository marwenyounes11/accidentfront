import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoyenTransport} from '../model/moyentransport'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { MoyenTransportDto } from '../components/dto/moyentransportdto';

@Injectable({
  providedIn: 'root'
})
export class MoyenTransportService {

  choixmenu : string  = 'A';
  listData : MoyenTransport[];
  public dataForm1:  FormGroup; 
  public dataForm2:  FormGroup; 
  public dataForm3:  FormGroup; 
  parametres = new HttpParams();
  constructor(private http: HttpClient) { }
 
  getBusPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/buspaginationmc`, { params: this.parametres });
  }

  getBusPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/buspagination`, { params: this.parametres });
  }

  getMetrosPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/metrospaginationmc`, { params: this.parametres });
  }

  getMetrosPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/metrospagination`, { params: this.parametres });
  }

  getTgmPaginationMc(mc :any,page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('mc', mc);
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/tgmpaginationmc`, { params: this.parametres });
  }

  getTgmPagination(page :any,size :any): Observable<any> {
    this.parametres = this.parametres.set('page', page);
    this.parametres = this.parametres.set('size', size);
    return this.http.get(`http://localhost:8989/tgmpagination`, { params: this.parametres });
  }
 
  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/moyenTransports/${id}`);
  }
 
  createBus(info): Observable<any> {
    return this.http.post('http://localhost:8989/addbus', info);
  }
  
  updateBus(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editbus/${id}`, value);
  }

  createMetro(info): Observable<any> {
    return this.http.post('http://localhost:8989/addmetro', info);
  }
  
  updateMetro(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/editmetro/${id}`, value);
  }

  createTgm(info): Observable<any> {
    return this.http.post('http://localhost:8989/addtgm', info);
  }
  
  updateTgm(id: number, value: any): Observable<any> {
    return this.http.put(`http://localhost:8989/edittgm/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`http://localhost:8989/deletemoyenTransports/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
  
    return this.http.get('http://localhost:8989/listMoyenTransports');
  }

  getBus(): Observable<any> {
  
    return this.http.get('http://localhost:8989/listbus');
  }

  getMetros(): Observable<any> {
  
    return this.http.get('http://localhost:8989/listmetros');
  }

  getTgm(): Observable<any> {
  
    return this.http.get('http://localhost:8989/listtgms');
  }
}
