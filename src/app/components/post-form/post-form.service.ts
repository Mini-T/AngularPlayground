import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostModel} from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostFormService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get('/api/posts')
  }
  addPost(payload: PostModel){
    return this.http.post('/api/post/new', payload)
  }
}
