import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {PostFormComponent} from "./components/post-form/post-form.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'social', component: PostFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
