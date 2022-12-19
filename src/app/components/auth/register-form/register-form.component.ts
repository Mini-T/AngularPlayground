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
    // si le token existe, le décode et injecte les credentials contenu a l'intérieur dans le service userService
    TokenInterceptor.token ? this.userService.getCredentials(TokenInterceptor.token) : '';
  }

  ngOnInit(): void {
  }

  submit() {
    //récupère les champs remplis
    let payload: UserModel = {
      email: this.email,
      username: this.username,
      password: this.password
    }
    // @ts-ignore
    this.userService.register(payload).subscribe(resp => resp['status'] == 200 ? this.userService.authenticationRequired.next() : console.log('failed to register'))
  }
}
