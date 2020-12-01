import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccidentRouteComponent } from './add-accidentroute.component';

describe('AddAccidentRouteComponent', () => {
  let component: AddAccidentRouteComponent;
  let fixture: ComponentFixture<AddAccidentRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccidentRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccidentRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
