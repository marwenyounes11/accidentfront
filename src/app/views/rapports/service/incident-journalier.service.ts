import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringLiteralType } from 'typescript';
@Injectable({
  providedIn: 'root'
})
export class IncidentJournalierService {

  public host :string ="http://localhost:8989"
  constructor(private http :HttpClient) { }
  
  getIncidentJournalierRoutes(dateAccident :String): Observable<any> {
    return this.http.get(`http://localhost:8989/incidentJournaliers/route/${dateAccident}`);
  }
  getIncidentJournalierTravails(dateAccident :String): Observable<any> {
    return this.http.get(`http://localhost:8989/incidentJournaliers/travail/${dateAccident}`);
  }
  getIncidentJournalierCollisions(dateAccident :String): Observable<any> {
    return this.http.get(`http://localhost:8989/incidentJournaliers/collision/${dateAccident}`);
  }
}
