import {Component, Inject, OnInit} from '@angular/core';
import {UserModel} from "../user.model";
import {TokenInterceptor} from "../../../token.interceptor";
import {UserService} from "../user.service";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../auth.component.scss']
})
export class RegisterFormComponent implements OnInit {
  email: string;
  username: string;
  password: string;

  constructor(private tokenInterceptor: TokenInterceptor, private userService: UserService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: [], private bottomSheetRef: MatBottomSheetRef<RegisterFormComponent>) {
    this.email = '';
    this.username = '';
    this.password = '';
    TokenInterceptor.token ? this.userService.getCredentials(TokenInterceptor.token) : '';
  }

  ngOnInit(): void {
  }

  submit() {
    let payload: UserModel = {
      email: this.email,
      username: this.username,
      password: this.password
    }
    this.userService.register(payload).subscribe()
  }
}
