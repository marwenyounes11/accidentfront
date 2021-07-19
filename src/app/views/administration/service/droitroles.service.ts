import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams,} from '@angular/common/http';

import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Role } from '../model/role';
import { Droit } from '../model/droit';
import { DroitRolesForm } from '../model/droitrolesform';
import { SousRubrique } from '../model/sousrubrique';
import { DroitRoles } from '../model/droitroles';


@Injectable({
  providedIn: 'root'
})
export class DroitRolesService {
  parametres = new HttpParams();

  choixmenu : string  = 'A';
  api:string='http://localhost:8989/api/auth/affectdroits';
    public dataForm:  FormGroup; 
    constructor(private http: HttpClient) { }
   
    getListDroitRoles(): Observable<any> {
    
      return this.http.get('http://localhost:8989/listdroitroles');
    }
    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/droitroles/${id}`);
    }
    getDroitRolesByDroitSousRubriqueRole(droitid,sousrubriqueid,roleid): Observable<DroitRoles> {
      this.parametres = this.parametres.set('droitid', droitid);
      this.parametres = this.parametres.set('sousrubriqueid', sousrubriqueid);
      this.parametres = this.parametres.set('roleid', roleid);
      return this.http.get<DroitRoles>(`http://localhost:8989/droitrolesparam`, { params: this.parametres });
    }
    createData(info: Object): Observable<Object> {
      return this.http.post(`http://localhost:8989/droitroles`, info, { responseType: 'text' });
    }

   
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/droitroles/${id}`, value, { responseType: 'text' });
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/droitroles/${id}`, { responseType: 'text' });
    }
    deleteByDroitRole(info: Object): Observable<Object> {
      return this.http.delete(`http://localhost:8989/droitroles/byroledroit`, info);
    }
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/droitroles');
    }
}
