import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
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
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 
 
  getData(id: number): Observable<any> {
    return this.http.get(`http://localhost:8989/moyenTransports/${id}?projection=p4`);
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
  
    return this.http.get('http://localhost:8989/moyenTransports?projection=p4');
  }
}
