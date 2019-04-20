import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysurveysComponent } from './mysurveys.component';

describe('MysurveysComponent', () => {
  let component: MysurveysComponent;
  let fixture: ComponentFixture<MysurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
