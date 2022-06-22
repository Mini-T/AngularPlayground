import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {AuthComponent} from "./components/auth/auth.component";
import {PostComponent} from "./components/post-form/post/post.component";
import {PostFormComponent} from "./components/post-form/post-form.component";
import {RegisterFormComponent} from "./components/auth/register-form/register-form.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'login', component: AuthComponent
  },
  {
    path: 'post', component: PostFormComponent
  },
  {
    path: 'register', component: RegisterFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
