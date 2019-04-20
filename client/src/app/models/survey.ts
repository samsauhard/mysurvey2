import {Question} from '../models/Question';
import {Answers} from '../models/Answers';
export class Survey {
  email: String;
  surveyid: String;
  questions:[Question];
}