import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentTransportComponent } from './accidenttransport.component';

describe('AccidentTransportComponent', () => {
  let component: AccidentTransportComponent;
  let fixture: ComponentFixture<AccidentTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccidentTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
