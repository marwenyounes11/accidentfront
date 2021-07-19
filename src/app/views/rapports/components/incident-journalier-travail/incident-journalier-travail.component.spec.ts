import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentJournalierTravailComponent } from './incident-journalier-travail.component';

describe('IncidentJournalierTravailComponent', () => {
  let component: IncidentJournalierTravailComponent;
  let fixture: ComponentFixture<IncidentJournalierTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentJournalierTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentJournalierTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
