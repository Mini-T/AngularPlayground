import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostFormService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get('/api/posts')
  }
}
