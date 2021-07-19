import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAgentTranstuComponent } from './gestionagenttranstu.component';

describe('GestionAgentTranstuComponent', () => {
  let component: GestionAgentTranstuComponent;
  let fixture: ComponentFixture<GestionAgentTranstuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAgentTranstuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAgentTranstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
