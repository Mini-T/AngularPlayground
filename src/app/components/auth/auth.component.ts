import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {UserModel} from "./user.model";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {catchError, EMPTY, tap} from "rxjs";
import {TokenInterceptor} from "../../token.interceptor";
import jwt_decode from "jwt-decode";
import {Token} from "@angular/compiler";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

// composant d'authentification, avec formulaire NgModel et des appels http pour obtenir le token d'authentification
export class AuthComponent implements OnInit {
  user?: UserModel;
  token?: string;
  email!: string;
  password!: string;
  loginSuccess: boolean = false;

  constructor(
    private tokenInterceptor: TokenInterceptor,
    private userService: UserService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: [],
    private bottomSheetRef: MatBottomSheetRef<AuthComponent>
  ) {}

  submitForm(){
    let payload: UserModel = {
      email: this.email,
      password: this.password
    }

    this.userService.login(payload).subscribe({
      next: result => {
        // @ts-ignore
        TokenInterceptor.token=result['token']
        this.userService.hasToken = true
        this.injectTokenInfos();
        this.loginSuccess = true
        this.user = this.userService.user
        this.bottomSheetRef.dismiss()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  injectTokenInfos(){
    let token = jwt_decode(TokenInterceptor.token)

    this.userService.user = {
      // @ts-ignore
      username: token['username'],
      // @ts-ignore
      roles: token['roles'][0]
    }
    console.log(this.userService.user)
  }
  ngOnInit(): void {
    this.token = TokenInterceptor.token
  }

}
