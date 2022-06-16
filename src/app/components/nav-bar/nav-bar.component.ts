import {Component, Input, OnInit} from '@angular/core';
import {Link} from "./nav-bar.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() links?: Link[];
  @Input() active?: boolean;
  @Input() hiding?: boolean
  hovered: boolean = false;
  showMenu: boolean = false

  event(){
    this.active = true;
    console.log('here')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
