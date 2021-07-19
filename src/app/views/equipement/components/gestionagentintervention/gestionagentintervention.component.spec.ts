import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAgentInterventionComponent } from './gestionagentintervention.component';

describe('GestionAgentInterventionComponent', () => {
  let component: GestionAgentInterventionComponent;
  let fixture: ComponentFixture<GestionAgentInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAgentInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAgentInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
