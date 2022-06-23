import {Component} from '@angular/core';
import {Link} from "./components/nav-bar/nav-bar.model";
import {UserService} from "./components/auth/user.service";
import {UserModel} from "./components/auth/user.model";
import {take} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPlayground';
  navActive?: boolean;
  navHiding?: boolean;
  myLogo?: string = '../../../assets/images/'
  userModel?: UserModel;
  isLoggedIn: boolean = false
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
        url: "/social",
        label: "Social"
      }
    ]

  constructor(private userService: UserService) {
    this.navActive = true
    this.navHiding = true
     this.userService.getUser().pipe(take(1)).subscribe(user => {
       this.userModel = user;
       this.userModel ? this.isLoggedIn = true : ''
     });
  }
}
