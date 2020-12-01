import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgentInterventionComponent } from './add-agentintervention.component';

describe('AddAgentInterventionComponent', () => {
  let component: AddAgentInterventionComponent;
  let fixture: ComponentFixture<AddAgentInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgentInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgentInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
