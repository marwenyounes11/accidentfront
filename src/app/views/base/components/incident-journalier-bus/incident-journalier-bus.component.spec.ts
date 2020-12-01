import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentJournalierBusComponent } from './incident-journalier-bus.component';

describe('IncidentJournalierBusComponent', () => {
  let component: IncidentJournalierBusComponent;
  let fixture: ComponentFixture<IncidentJournalierBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentJournalierBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentJournalierBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
