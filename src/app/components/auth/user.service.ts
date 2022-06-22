import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(payload:UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('/api/login', payload)
  }
  getUser(): Observable<UserModel> {
    return this.http.get<UserModel>('/api/login').pipe(tap(user => console.log(user)));
  }
}
