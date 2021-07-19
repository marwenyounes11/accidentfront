import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringLiteralType } from 'typescript';
@Injectable({
  providedIn: 'root'
})
export class RapportStatistiqueService {
   parametres = new HttpParams();
  
  public host :string ="http://localhost:8989"
  constructor(private http :HttpClient) { }
 
  getEstimationPrixDegatParDate(): Observable<any> {
    return this.http.get('http://localhost:8989/estimationPrixDegatParDate');
  }

  getEstimationPrixDegatParTypeAccident(): Observable<any> {
    return this.http.get('http://localhost:8989/estimationPrixDegatParTypeAccident');
  }

  getEstimationPrixDegatParSousTypeAccident(): Observable<any> {
    return this.http.get('http://localhost:8989/estimationPrixDegatParSousTypeAccident');
  }

  getNbrAccidentParDate(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrAccidentParDate');
  } 
  getNbrAccidentParMois(date :any): Observable<any> {
    
      this.parametres = this.parametres.set("d1", date);
    return this.http.get('http://localhost:8989/nbrAccidentParMois', { params: this.parametres });
    
  } 
  getEvaluationNbrAccidentCollisionBusParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.set('d1', d1);
    this.parametres = this.parametres.set('d2', d2);
    return this.http.get('http://localhost:8989/evaluationNbrAccidentCollisionBusParAnner', { params: this.parametres });
  } 
  getEvaluationNbrAccidentRouteBusParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.set('d1', d1);
    this.parametres = this.parametres.set('d2', d2);
    return this.http.get('http://localhost:8989/evaluationNbrAccidentRouteBusParAnner', { params: this.parametres });
  } 
  getEvaluationNbrAccidentCollisionMetrosParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.set('d1', d1);
    this.parametres = this.parametres.set('d2', d2);
    return this.http.get('http://localhost:8989/evaluationNbrAccidentCollisionMetrosParAnner', { params: this.parametres });
  } 
  getEvaluationNbrAccidentRouteMetrosParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.set('d1', d1);
    this.parametres = this.parametres.set('d2', d2);
    return this.http.get('http://localhost:8989/evaluationNbrAccidentRouteMetrosParAnner', { params: this.parametres });
  } 
  getEvaluationNbrAccidentCollisionTgmParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.set('d1', d1);
    this.parametres = this.parametres.set('d2', d2);
    return this.http.get('http://localhost:8989/evaluationNbrAccidentCollisionTgmParAnner', { params: this.parametres });
  } 
  getEvaluationNbrAccidentRouteTgmParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.set('d1', d1);
    this.parametres = this.parametres.set('d2', d2);
    return this.http.get('http://localhost:8989/evaluationNbrAccidentRouteTgmParAnner', { params: this.parametres });
  } 
  getNbrAccidentParDistrict(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrAccidentParDistrict');
  } 

  getNbrAccidentParMoyenTransport(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrAccidentParMoyenTransport');
  } 

  getNbrAccidentParMoyenTransportDate(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrAccidentParMoyenTransportDate');
  } 

  getNbrAccidentParTypeAccident(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrAccidentParTypeAccident');
  } 

  getNbrAccidentParSousTypeAccident(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrAccidentParSousTypeAccident');
  } 

  getNbrBlesserExterne(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrBlesserExterne');
  } 

  getNbrBlesserInterne(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrBlesserInterne');
  } 

  getNbrBlesserParNiveauBlessure(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrBlesserParNiveauBlessure');
  } 

  getNbrMortsParDate(): Observable<any> {
    return this.http.get('http://localhost:8989/nbrMortsParDate');
  }
  
  getNbrMortsParMois(d1 :any): Observable<any> {
    this.parametres = this.parametres.set("d1", d1);
    return this.http.get('http://localhost:8989/nbrMortsParMois', { params: this.parametres });
  }

  getNbrMortsBusCollisionParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrMortsBusCollisionParAnner');
  }

  getNbrMortsBusRouteParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrMortsBusRouteParAnner');
  }

  getNbrMortsMetrosCollisionParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrMortsMetrosCollisionParAnner');
  }

  getNbrMortsMetrosRouteParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrMortsMetrosRouteParAnner');
  }

  getNbrMortsTgmCollisionParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrMortsTgmCollisionParAnner');
  }

  getNbrMortsTgmRouteParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrMortsTgmRouteParAnner');
  }
  getNbrBlesserParMois(d1 :any): Observable<any> {
    this.parametres = this.parametres.set("d1", d1);
    return this.http.get('http://localhost:8989/nbrBlesserParMois', { params: this.parametres });
  }
  

  getNbrBlesserBusCollisionParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrBlesserBusCollisionParAnner');
  }

  getNbrBlesserBusRouteParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrBlesserBusRouteParAnner');
  }

  getNbrBlesserMetrosCollisionParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrBlesserMetrosCollisionParAnner');
  }

  getNbrBlesserMetrosRouteParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrBlesserMetrosRouteParAnner');
  }

  getNbrBlesserTgmCollisionParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrBlesserTgmCollisionParAnner');
  }

  getNbrBlesserTgmRouteParAnner(d1 :any,d2 :any): Observable<any> {
    this.parametres = this.parametres.append('d1', d1);
    this.parametres = this.parametres.append('d2', d2);
    return this.http.get('http://localhost:8989/nbrBlesserTgmRouteParAnner');
  }
}
