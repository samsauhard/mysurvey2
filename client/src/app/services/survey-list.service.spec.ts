import { TestBed } from '@angular/core/testing';

import { SurveyListService } from './survey-list.service';

describe('SurveyListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyListService = TestBed.get(SurveyListService);
    expect(service).toBeTruthy();
  });
});
