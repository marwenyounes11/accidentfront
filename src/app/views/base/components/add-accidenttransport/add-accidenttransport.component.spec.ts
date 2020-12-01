import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccidentTransportComponent } from './add-accidenttransport.component';

describe('AddAccidentTransportComponent', () => {
  let component: AddAccidentTransportComponent;
  let fixture: ComponentFixture<AddAccidentTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccidentTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccidentTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
