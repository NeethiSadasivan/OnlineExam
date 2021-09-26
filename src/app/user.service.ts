import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Admin } from './model/admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  private url = "http://localhost:34795/api/admins"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  AdminLogin(admin: Admin) {
    return this.client.post(this.url+'/AdminLogin', JSON.stringify(admin), this.httpOptions);
  }
}
