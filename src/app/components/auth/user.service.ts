import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {TokenInterceptor} from "../../token.interceptor";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  hasToken?: boolean;
  user?: UserModel;
  constructor(private http: HttpClient) {}

  getCredentials(token: string){
    let creds = atob(token)
    console.log(creds)
  }
  login(payload:UserModel): Observable<Object>{
    return this.http.post<UserModel>('/api/login', payload)
  }
  getUser(): Observable<UserModel> {
    return this.http.get<UserModel>('/api/login');
  }
  logout(){
    return this.http.get('/api/logout')
  }
  register(payload: UserModel): Observable<Object>{
    return this.http.post('/api/register', payload)
  }
}
