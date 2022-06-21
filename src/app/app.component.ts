import {Component} from '@angular/core';
import {Link} from "./components/nav-bar/nav-bar.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPlayground';
  navActive?: boolean;
  navHiding?: boolean;
  myLogo?: string = ''
  links: Link[] =
    [
      {
        url: "/home",
        label: "Home"
      },
      {
        url: "",
        label: "Welcome Screen"
      },
      {
        url: "post",
        label: ""
      }
    ]

  constructor() {
    this.navActive = true
    this.navHiding = true
  }
}
