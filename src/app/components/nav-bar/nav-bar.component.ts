import {Component, Input, OnInit} from '@angular/core';
import {Link} from "./nav-bar.model";
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {AuthComponent} from "../auth/auth.component";
import {RegisterFormComponent} from "../auth/register-form/register-form.component";
import {UserModel} from "../auth/user.model";
import {UserService} from "../auth/user.service";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

//composant NavBar, simplement, la barre de navigation, je prévois de l'échanger avec une mat-sidenav, plus stable et efficace
export class NavBarComponent implements OnInit {
  @Input() links?: Link[];
  @Input() canHide?: boolean = false;
  @Input() fixed?: boolean = false;
  @Input() logoPath?: boolean;
  hiding: boolean = true;
  showMenu: boolean = false;
  user?: UserModel = this.userService.user
  active?: boolean = false;
  hasToken?: boolean = this.userService.hasToken

  event(){
    console.log(this.hiding)
  }

  constructor(private userService: UserService, private bottomSheet: MatBottomSheet) {
    this.initComponent();
  }

  logout(){
    this.userService.logout().subscribe(log => console.log(log))
  }
  openBottomSheetLogin(): void {
    this.bottomSheet.open(AuthComponent, {});
  }
  openBottomSheetRegister(): void {
    this.bottomSheet.open(RegisterFormComponent, {});
  }

  initComponent(){
    if (this.canHide){
      this.hiding = true
    } else {
      this.hiding = false
    }
  }
  ngOnInit(): void {
    this.userService.authenticationRequired.subscribe(() => this.openBottomSheetLogin());
  }

}
