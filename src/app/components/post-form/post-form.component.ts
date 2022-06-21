import { Component, OnInit } from '@angular/core';
import {UserModel} from "../auth/user.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title?: string;
  content?: string;
  date!: Date;
  author!: UserModel
  constructor() { }

  ngOnInit(): void {
  }

}
