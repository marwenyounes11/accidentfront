import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTransportComponent } from './agenttransport.component';

describe('AgentTransportComponent', () => {
  let component: AgentTransportComponent;
  let fixture: ComponentFixture<AgentTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgentTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
