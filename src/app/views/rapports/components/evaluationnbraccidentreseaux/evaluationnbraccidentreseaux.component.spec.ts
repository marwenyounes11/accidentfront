import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationNbrAccidentReseauxComponent } from './evaluationnbraccidentreseaux.component';

describe('EvaluationNbrAccidentReseauxComponent', () => {
  let component: EvaluationNbrAccidentReseauxComponent;
  let fixture: ComponentFixture<EvaluationNbrAccidentReseauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationNbrAccidentReseauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationNbrAccidentReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
