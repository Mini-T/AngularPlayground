import { Component, OnInit } from '@angular/core';
import {UserModel} from "../auth/user.model";
import {PostModel} from "./post.model";
import {PostFormService} from "./post-form.service";
import {DatePipe} from "@angular/common";
import {UserService} from "../auth/user.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title?: string;
  content?: string;
  date!: string
  posts?: PostModel[];
  author!: UserModel;
  constructor(private datePipe: DatePipe,private userService: UserService, private postService: PostFormService){
    this.date = new Date().toISOString();

    this.userService.user ? this.author = this.userService.user : null;
    this.posts = [
      {
      content: 'contenu',
      author: {
        email:'admin@mail.local',
        id: 1,
        username: 'admin',
      },
      title: 'titre',
      date: '2022-06-23T08:45:11Z',
    },
      {
        content: 'contenu',
        author: {
          email:'admin@mail.local',
          id: 1,
          username: 'admin',
        },
        title: 'titre',
        date: '2022-06-23T08:45:11Z',
      },
      {
        content: 'contenu',
        author: {
          email:'admin@mail.local',
          id: 1,
          username: 'admin',
        },
        title: 'titre',
        date: '2022-06-23T08:45:11Z',
      },
      {
        content: 'contenu',
        author: {
          email:'admin@mail.local',
          id: 1,
          username: 'admin',
        },
        title: 'titre',
        date: '2022-06-23T08:45:11Z',
      },
      {
        content: 'contenu',
        author: {
          email:'admin@mail.local',
          id: 1,
          username: 'admin',
        },
        title: 'titre',
        date: '2022-06-23T08:45:11Z',
      }
    ]
  }

  addPost(){


    let payload: PostModel =
      {
        title: this.title,
        date: this.date,
        content:this.content,
        author: this.author
      }
    this.postService.addPost(payload).subscribe(resp => console.log(resp))
  }
  ngOnInit(): void {
  }

}
