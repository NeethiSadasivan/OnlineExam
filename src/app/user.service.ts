import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Admin } from './model/admin';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }
  
  public subject=new Subject<boolean>();
  private url = "http://localhost:34795/api/"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }

  AdminLogin(admin: Admin) {
    return this.client.post(this.url+'Admins/AdminLogin', JSON.stringify(admin), this.httpOptions);
  }

  Register(users:User)
  {
    return this.client.post(this.url+'Users/Register',JSON.stringify(users),this.httpOptions);
  }

  Login(users:User)
  {
    return this.client.post(this.url+'Users/Login',JSON.stringify(users),this.httpOptions);
  }


}
