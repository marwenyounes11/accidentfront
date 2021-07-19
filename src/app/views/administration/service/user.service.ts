import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    constructor(private http: HttpClient) { 
      this.currentUserSubject = new BehaviorSubject<User>({} as User);
      this.currentUser = this.currentUserSubject.asObservable();
    }
   
     /**
     * Set user value.
     * @param user IUser    User object.
     */
    public set User(user: User) {
      console.log('new user', user);
      this.currentUserSubject.next(user);
  }
  
  /**
   * Get current user value.
   * @return User   Connected User object value.
   */
  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }
   
    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/api/auth/users/${id}`);
    }
   
    getUser(username): Observable<any> {
      return this.http.get(`http://localhost:8989/api/auth/users/username/${username}`);
    }
   


    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/api/auth/signup', info, { responseType: 'text' });
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/api/auth/users/${id}`, value, { responseType: 'text' });
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/api/auth/users/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/api/auth/users');
    }
}
