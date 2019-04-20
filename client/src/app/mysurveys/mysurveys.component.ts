import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey';
import { Router } from '@angular/router';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { User } from '../models/user';
@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MysurveysComponent implements OnInit {
  surveys: Survey[];

  constructor(
    private SurveyListService: SurveyListService,
    private router: Router,
    private user: User
  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.user = new User();
    this.loadToken();
    this.displaySurveyListbyUser();
  }

  displaySurveyListbyUser(): void {
    this.SurveyListService.getList1(this.user).subscribe(data => {
      if(data.success) {
        this.surveys = data.surveyList;
        console.log(data);
      } else {
        console.log(data);
        this.router.navigate(['/login']);
      }
    });
  }
  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.user = JSON.parse(localStorage.getItem('user'));

  }
}
