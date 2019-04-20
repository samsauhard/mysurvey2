import { Component, OnInit, ɵConsole } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Answers } from 'src/app/models/Answers';
import { SurveyAnswer } from 'src/app/models/survey_ans';
import { Survey } from 'src/app/models/survey';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-survey-ans',
  templateUrl: './survey-ans.component.html',
  styleUrls: ['./survey-ans.component.css']
})
export class SurveyAnsComponent implements OnInit {
  title: string;
  survey: Survey;
  answer : Answers;
  questions : [Question];
  question : Question;
  build_ans: SurveyAnswer;
  email: String;
  size: Number;
  surveys: [Survey];
  constructor(
      
  
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private SurveyListService: SurveyListService,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();
    this.questions = [new Question()];
    this.question = new Question();
    this.build_ans = new SurveyAnswer();
    this.answer = new Answers();
    this.surveys = [new Survey()];
    this.build_ans.ans = [new Answers()];
    this.size = 0;
    this.activatedRoute.params.subscribe(params => {
      this.survey.surveyid = params.id;
    });

      this.getSurvey(this.survey);
  }

  private getSurvey(survey: Survey): void {
    this.SurveyListService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
      this.size= this.survey[0].questions.length;

      for(var i=0; i<this.survey[0].questions.length;i++)
      {
        this.questions[i]=this.survey[0].questions[i];
        
      }
      this.email = this.survey[0].email;


          });
  }
 
  onAnswerSubmit(): void {   
    
     
      this.build_ans.surveyid = this.survey[0].surveyid;
      
      for(var i=0; i<this.size;i++)
      {
        this.build_ans.ans[i].answer=this.survey[0].questions[i].ans;
        this.build_ans.ans[i].questionid = this.survey[0].questions[i].quesid;
        
        console.log(this.build_ans);
        console.log(this.survey)
      }
   
     console.log(this.build_ans);
      this.SurveyListService.addAnswer(this.build_ans).subscribe(data => {
        if (data.success) {
          this.router.navigate(['/dashboard']);
        } else {
          
          this.router.navigate(['/dashboard']);
        }
      });
    
    }
  

}