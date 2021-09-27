import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { Users } from './users';
import { Result } from './result';
import { Observable } from 'rxjs';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {
  private apiServer = "";           // need to add
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  AddQues(ques:any): Observable<Questions> {
    return this.httpClient.post<Questions>(this.apiServer + '/ques/', JSON.stringify(ques), this.httpOptions)
  }

  getAllUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.apiServer + '/users/')
  }

  getAllResult():Observable<Result[]>{
    return this.httpClient.get<Result[]>(this.apiServer + '/result/')
  }

  getUserById(id:any): Observable<Users>{
    return this.httpClient.get<Users>(this.apiServer + '/user/' + id)
  }

  getResultById(id:any):Observable<Result>{
    return this.httpClient.get<Result>(this.apiServer + '/result/' + id)
  }
}
