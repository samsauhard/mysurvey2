import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SurveyAnsComponent } from './pages/survey-ans/survey-ans.component';

const routes: Routes = [ 
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'dashboard', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'surveys', component: SurveysComponent, data: {title: 'Surveys'}}, 
  {path: 'surveys/survey-list/', component: SurveysComponent, data: {title: 'Surveys'},canActivate: [AuthGuard]},
  {path: 'surveys/survey-list/:id', component: SurveyAnsComponent, data: {title: 'Answer Survey'},canActivate: [AuthGuard]},

  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
