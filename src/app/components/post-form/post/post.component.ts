import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../auth/user.model";
import {PostModel} from "../post.model";
import {PostFormService} from "../post-form.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  content?: string;
  title?:string;
  date!: string;
  author!: UserModel;
  @Input() post?: PostModel

  constructor(private postsService: PostFormService) {

  }

  getAllPosts(){
    this.postsService.getAllPosts().subscribe()
  }
  ngOnInit(): void {
  }

}
