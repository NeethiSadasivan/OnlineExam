import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Admin } from './model/admin';
import { User } from './model/user';
import { Result } from './model/result';
import { Questions } from './model/questions';
import { Report } from './model/report';
import { Subjects } from './model/subjects';
//import { Console } from 'console';

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

  AddQues(ques:any): Observable<Questions> {
    return this.client.post<Questions>(this.url + '/ques/', JSON.stringify(ques), this.httpOptions)
  }

  getAllUsers():Observable<User[]>{
    return this.client.get<User[]>(this.url + '/users/')
  }

  getAllResult():Observable<Result[]>{
    return this.client.get<Result[]>(this.url + '/result/')
  }

  getUserById(id:any): Observable<User>{
    return this.client.get<User>(this.url + '/user/' + id)
  }

  getResultById(id:any):Observable<Result>{
    return this.client.get<Result>(this.url + '/result/' + id)
  }

  getReportByEmail(emailid:string)
  {
    return this.client.get<Report[]>(this.url+'Users/Reportcard/?emailid='+emailid)
  }
  CheckEmail(emailid:string)
  {
    return this.client.post(this.url+'Users/EmailExists?emailid='+emailid,JSON.stringify(emailid),this.httpOptions);
  }

  ForgotPassword(users:User)
  {
    return this.client.post(this.url+'Users/ForgotPassword',JSON.stringify(users),this.httpOptions);
  }

  getsubjects():Observable<Subjects[]>
  {
    return this.client.get<Subjects[]>(this.url + 'Subjects');
  }

  getAllLevel1Questions(subjectname:any)
  {
    return this.client.get<Questions[]>(this.url + 'Questions/Level1?sub='+subjectname);
  }

  updateResults(results:Result,emailid:any,subjectname:any)
  {
    return this.client.post(this.url+'Users/UpdateResults?emailid='+emailid+'&subjectname='+subjectname,JSON.stringify(results),this.httpOptions);
  }

}
