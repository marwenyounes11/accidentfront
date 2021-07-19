import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentInterventionComponent } from './agentintervention.component';

describe('AgentInterventionComponent', () => {
  let component: AgentInterventionComponent;
  let fixture: ComponentFixture<AgentInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
