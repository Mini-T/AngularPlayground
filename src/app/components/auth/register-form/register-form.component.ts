import { Component, OnInit } from '@angular/core';
import {RegisterService} from "./register.service";
import {UserModel} from "../user.model";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  email: string;
  username: string;
  password: string;

  constructor(private registerService: RegisterService) {
    this.email = '';
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  submit() {
    let payload: UserModel = {
      email: this.email,
      username: this.username,
      password: this.password
    }
    this.registerService.register(payload).subscribe()
  }
}
