import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {HomeComponent} from './components/home/home.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';
import {CarouselComponent} from './components/carousel/carousel.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './components/auth/auth.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {PostComponent} from './components/post-form/post/post.component';
import {PostFormComponent} from './components/post-form/post-form.component';
import {PostAnswerComponent} from './components/post-form/post/post-answer/post-answer.component';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {FooterComponent} from './components/footer/footer.component';
import {RegisterFormComponent} from './components/auth/register-form/register-form.component';
import {ServerStatusModule} from './components/server-status/server-status.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TokenInterceptor} from './token.interceptor';
import {DatePipe} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    WelcomeComponent,
    CarouselComponent,
    AuthComponent,
    PostComponent,
    PostFormComponent,
    PostAnswerComponent,
    FooterComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatBottomSheetModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    FormsModule,
    MatFormFieldModule,
    ServerStatusModule,
    MatTabsModule,
  ],
  providers: [
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},
    { provide: TokenInterceptor, useValue:{}},
    { provide: DatePipe, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
