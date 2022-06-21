import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../auth/user.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title?: string;
  @Input() content?: string;
  date!: Date;
  author!: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
