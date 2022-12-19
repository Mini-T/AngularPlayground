import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, Subject, tap} from 'rxjs';
import {TokenInterceptor} from "../../token.interceptor";

@Injectable({
  providedIn: 'root'
})

// UserService, soit le service détenant les credentials du User actuels s'ils existent,
// étant un service, il est injecté un peu partout ou il est nécessaire d'avoir le current user
export class UserService {

  hasToken?: boolean;
    user?: UserModel;
  authenticationRequired=new Subject<void>();

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
  requireAuthentication() {
    this.authenticationRequired.next();
  }
}
