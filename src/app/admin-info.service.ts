import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { User } from './model/user';
import { Result } from './model/result';
import { Observable } from 'rxjs';
import { Questions } from './model/questions';
import { ViewResult } from './model/view-result';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {
  private apiServer = "http://localhost:34795/api/";           // need to add
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  // AddQues(ques:any): Observable<Questions> {
  //   return this.httpClient.post<Questions>(this.apiServer + '/ques/', JSON.stringify(ques), this.httpOptions)
  // }

  // getAllUsers():Observable<User[]>{
  //   return this.httpClient.get<User[]>(this.apiServer + '/users/')
  // }

  // getAllResult():Observable<Result[]>{
  //   return this.httpClient.get<Result[]>(this.apiServer + '/result/')
  // }

  // getUserById(id:any): Observable<User>{
  //   return this.httpClient.get<User>(this.apiServer + '/user/' + id)
  // }

  // getResultById(id:any):Observable<Result>{
  //   return this.httpClient.get<Result>(this.apiServer + '/result/' + id)
  // }

  getStudentResultsByState(subid:string, state:string){
    return this.httpClient.get<ViewResult[]>(this.apiServer + 'studentdetail/?subjectid='+subid+'&state='+state)
  }
}
