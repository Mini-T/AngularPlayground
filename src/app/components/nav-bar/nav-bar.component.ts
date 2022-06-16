import {Component, Input, OnInit} from '@angular/core';
import {Link} from "./nav-bar.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() links?: Link[];
  @Input() canHide?: boolean = false;
  @Input() fixed?: boolean = false;
  hiding?: boolean = true;
  showMenu: boolean = false;
  active?: boolean = false;

  event(){
    console.log(this.hiding)
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
