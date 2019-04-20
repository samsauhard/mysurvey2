import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-surveys',
  templateUrl: 'surveys.component.html',
  styleUrls: ['surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys: Survey[];

  constructor(
    private SurveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();

    this.displaySurveyList();
  }

  displaySurveyList(): void {
    this.SurveyListService.getList().subscribe(data => {
      if(data.success) {
        this.surveys = data.surveyList;
        console.log(data);
      } else {
        console.log(data);
        this.router.navigate(['/login']);
      }
    });
  }

}