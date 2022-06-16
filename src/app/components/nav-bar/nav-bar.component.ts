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
  @Input() logoPath?: string
  hiding!: boolean
  showMenu: boolean = false;
  active?: boolean = false;

  event(){
    console.log(this.hiding)
  }

  constructor() {
    this.initComponent();
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
