import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentInformComponent } from './accidentinform.component';

describe('AccidentInformComponent', () => {
  let component: AccidentInformComponent;
  let fixture: ComponentFixture<AccidentInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccidentInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
