import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccidentInformComponent } from './add-accidentinform.component';

describe('AddAccidentInformComponent', () => {
  let component: AddAccidentInformComponent;
  let fixture: ComponentFixture<AddAccidentInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccidentInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccidentInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
