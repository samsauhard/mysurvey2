import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyAnswer } from '../models/survey_ans';
import { Survey } from '../models/survey';
import { User } from '../models/user';
import { Answers } from '../models/Answers';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyListService {
  private user: User;
  private authToken: any = null;
  private authService: AuthService;
  private endpoint = 'http://surveyappmean:3000/surveys/survey-list/';

  //private endpoint = 'https://portfoliomean.herokuapp.com/api/contact-list/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };
  

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public getList(): Observable<any> {
    this.loadToken();
    console.log(this.http.get<any>(this.endpoint, this.httpOptions));
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

   public getSurvey(survey: Survey): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + survey.surveyid, this.httpOptions);
  }

  public addAnswer(surveyanswer: SurveyAnswer): Observable<any> {
    this.loadToken();
    surveyanswer.email = this.user.email;
    console.log(JSON.stringify(surveyanswer.ans));
    console.log(this.user);
    return this.http.post<any>(this.endpoint + 'add', JSON.stringify(surveyanswer), this.httpOptions);
  }
/*
  public editContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'edit/' + contact._id, contact, this.httpOptions);
  }

  public deleteContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'delete/' + contact._id, this.httpOptions);
  }
*/
  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.user = JSON.parse(localStorage.getItem('user'));
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}