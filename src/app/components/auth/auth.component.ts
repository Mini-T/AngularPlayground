import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {UserModel} from "./user.model";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {catchError, EMPTY, tap} from "rxjs";
import {TokenInterceptor} from "../../token.interceptor";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user?: UserModel;
  token?: string;
  email!: string;
  password!: string

  constructor(private tokenInterceptor: TokenInterceptor, private userService: UserService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: [], private bottomSheetRef: MatBottomSheetRef<AuthComponent>) {}

  isLoggedIn(){
    this.userService.getUser().pipe(catchError(err => {
      console.log(err);
      return EMPTY;
    })).subscribe(userResponse => this.user = userResponse);
  }
  submitForm(){
    let payload: UserModel = {
      email: this.email,
      password: this.password
    }

    this.userService.login(payload).subscribe({
      next: result => {
        // rediriger comme on le fait avec le eportal pour avoir un login alternatif aussi proche que possible de la solution de production
        // @ts-ignore
        this.tokenInterceptor.token=result['token']
      },
      error: err => {
        // afficher une erreur
      }
    })
  }

  ngOnInit(): void {
    this.isLoggedIn()
  }

}
