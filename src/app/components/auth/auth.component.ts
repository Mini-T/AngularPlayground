import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {UserModel} from "./user.model";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email!: string;
  password!: string

  constructor(private userService: UserService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: [], private bottomSheetRef: MatBottomSheetRef<AuthComponent>) {}

  isLoggedIn(){
    this.userService.getUser()
  }
  submitForm(){
    let payload: UserModel = {
      email: this.email,
      password: this.password
    }
    this.userService.login(payload).subscribe(callback => console.log(callback))
  }

  ngOnInit(): void {
  }

}
