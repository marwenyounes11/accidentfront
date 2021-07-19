import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentJournalierReseauxComponent } from './incident-journalier-reseaux.component';

describe('IncidentJournalierReseauxComponent', () => {
  let component: IncidentJournalierReseauxComponent;
  let fixture: ComponentFixture<IncidentJournalierReseauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentJournalierReseauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentJournalierReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
