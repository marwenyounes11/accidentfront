import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationNbrAccidentComponent } from './evaluationnbraccident.component';

describe('EvaluationNbrAccidentComponent', () => {
  let component: EvaluationNbrAccidentComponent;
  let fixture: ComponentFixture<EvaluationNbrAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationNbrAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationNbrAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
