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
        url: "/home",
        label: "Home"
      },
      {
        url: "/home",
        label: "Home"
      },
      {
        url: "/home",
        label: "Home"
      },



    ]

  constructor() {
    this.navActive = true
  }
}
