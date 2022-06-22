import {Component, Input, OnInit} from '@angular/core';
import {Link} from "./nav-bar.model";
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {AuthComponent} from "../auth/auth.component";
import {RegisterFormComponent} from "../auth/register-form/register-form.component";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() links?: Link[];
  @Input() canHide?: boolean = false;
  @Input() fixed?: boolean = false;
  @Input() logoPath?: boolean
  hiding: boolean = true;
  showMenu: boolean = false;
  active?: boolean = false;

  event(){
    console.log(this.hiding)
  }

  constructor(private bottomSheet: MatBottomSheet) {
    this.initComponent();
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
  }

}
