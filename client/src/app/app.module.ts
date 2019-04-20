import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { AboutComponent } from './pages/about/about.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SurveyAnsComponent } from './pages/survey-ans/survey-ans.component';



export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    AboutComponent,
    SurveysComponent,
    PagenotfoundComponent,
    RegisterComponent,
    LoginComponent,
    SurveyAnsComponent
  ],
  imports:[
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  FlashMessagesModule,
  JwtModule.forRoot({
    config: {
      tokenGetter: jwtTokenGetter
    }
  })
],
providers: [FlashMessagesService,AuthGuard],
bootstrap: [AppComponent]
})
export class AppModule { }
