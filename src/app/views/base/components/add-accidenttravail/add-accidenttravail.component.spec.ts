import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccidentTravailComponent } from './add-accidenttravail.component';

describe('AddAccidentTravailComponent', () => {
  let component: AddAccidentTravailComponent;
  let fixture: ComponentFixture<AddAccidentTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccidentTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccidentTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
