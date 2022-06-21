import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(payload:UserModel): Observable<Object>{
    return this.http.post('/api/login', payload)
  }
}
