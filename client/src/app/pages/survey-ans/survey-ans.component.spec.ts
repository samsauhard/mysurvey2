import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnsComponent } from './survey-ans.component';

describe('SurveyAnsComponent', () => {
  let component: SurveyAnsComponent;
  let fixture: ComponentFixture<SurveyAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
