import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentJournalierMetroComponent } from './incident-journalier-metro.component';

describe('IncidentJournalierMetroComponent', () => {
  let component: IncidentJournalierMetroComponent;
  let fixture: ComponentFixture<IncidentJournalierMetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentJournalierMetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentJournalierMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
