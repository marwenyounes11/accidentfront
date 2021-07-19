import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringLiteralType } from 'typescript';
@Injectable({
  providedIn: 'root'
})
export class RapportFormatService {
   parametres = new HttpParams();
  
 
  constructor(private http :HttpClient) { }

 
  getReportEstimationPrixDegatParDate(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportEstimationPrixDegatParDate/${format}`);
  }

  getReportEstimationPrixDegatParTypeAccident(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportEstimationPrixDegatParTypeAccident/${format}`);
  }

  getReportEstimationPrixDegatParSousTypeAccident(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportEstimationPrixDegatParSousTypeAccident/${format}`);
  }

  getReportNbrAccidentParDate(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrAccidentParDate/${format}`);
  }

  getReportNbrAccidentParDistrict(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrAccidentParDistrict/${format}`);
  }
 
  getReportNbrAccidentParMoyenTransport(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrAccidentParMoyenTransport/${format}`);
  }


  getReportNbrAccidentParMoyenTransportDate(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrAccidentParMoyenTransportDate/${format}`);
  }

  getReportNbrAccidentParTypeAccident(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrAccidentParTypeAccident/${format}`);
  }

  getReportNbrAccidentParSousTypeAccident(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrAccidentParSousTypeAccident/${format}`);
  }

  getReportNbrBlesserExterne(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrBlesserExterne/${format}`);
  }

  getReportNbrBlesserInterne(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrBlesserInterne/${format}`);
  }

  getReportNbrBlesserParNiveauBlessure(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrBlesserParNiveauBlessure/${format}`);
  }

  getReportNbrMortsParDate(format:String): Observable<any> {
    return this.http.get(`http://localhost:8989/reportNbrMortsParDate/${format}`);
  }

  getRreportNbrAccidentParMois(format:String,date :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date);
    return this.http.get(`http://localhost:8989/reportNbrAccidentParMois/${format}`, { params: this.parametres });
  }

  getRreportNbrMortsParMois(format:String,date :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date);
    return this.http.get(`http://localhost:8989/reportNbrMortsParMois/${format}`, { params: this.parametres });
  }

  getRreportNbrBlesserParMois(format:String,date :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date);
    return this.http.get(`http://localhost:8989/reportNbrBlesserParMois/${format}`, { params: this.parametres });
  }

  getRreportEvaluationNbrAccidentCollisionBusParAnner(format:String,date1 :any,date2 :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date1);
    this.parametres = this.parametres.set("d2", date2);
    return this.http.get(`http://localhost:8989/reportEvaluationNbrAccidentCollisionBusParAnner/${format}`, { params: this.parametres });
  }

  getRreportEvaluationNbrAccidentRouteBusParAnner(format:String,date1 :any,date2 :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date1);
    this.parametres = this.parametres.set("d2", date2);
    return this.http.get(`http://localhost:8989/reportEvaluationNbrAccidentRouteBusParAnner/${format}`, { params: this.parametres });
  }

  getRreportEvaluationNbrAccidentCollisionMetrosParAnner(format:String,date1 :any,date2 :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date1);
    this.parametres = this.parametres.set("d2", date2);
    return this.http.get(`http://localhost:8989/reportEvaluationNbrAccidentCollisionMetrosParAnner/${format}`, { params: this.parametres });
  }

  getRreportEvaluationNbrAccidentRouteMetrosParAnner(format:String,date1 :any,date2 :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date1);
    this.parametres = this.parametres.set("d2", date2);
    return this.http.get(`http://localhost:8989/reportEvaluationNbrAccidentRouteMetrosParAnner/${format}`, { params: this.parametres });
  }

  getRreportEvaluationNbrAccidentCollisionTgmParAnner(format:String,date1 :any,date2 :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date1);
    this.parametres = this.parametres.set("d2", date2);
    return this.http.get(`http://localhost:8989/reportEvaluationNbrAccidentCollisionTgmParAnner/${format}`, { params: this.parametres });
  }

  getRreportEvaluationNbrAccidentRouteTgmParAnner(format:String,date1 :any,date2 :any): Observable<any> {
    this.parametres = this.parametres.set("d1", date1);
    this.parametres = this.parametres.set("d2", date2);
    return this.http.get(`http://localhost:8989/reportEvaluationNbrAccidentRouteTgmParAnner/${format}`, { params: this.parametres });
  }

}
