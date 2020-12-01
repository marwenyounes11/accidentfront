import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTranstuComponent } from './agenttranstu.component';

describe('AgentTranstuComponent', () => {
  let component: AgentTranstuComponent;
  let fixture: ComponentFixture<AgentTranstuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentTranstuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentTranstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
