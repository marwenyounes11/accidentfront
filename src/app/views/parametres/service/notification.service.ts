import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringLiteralType } from 'typescript';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   parametres = new HttpParams();
   public dataForm:  FormGroup; 
  public host :string ="http://localhost:8989"
  constructor(private http :HttpClient) { }
  createData(info: Object): Observable<Object> {
    return this.http.post('http://localhost:8989/notificationemail', info);
  }
  
}
