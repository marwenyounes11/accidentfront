import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccidentCollisionComponent } from './add-accidentcollision.component';

describe('AddAccidentCollisionComponent', () => {
  let component: AddAccidentCollisionComponent;
  let fixture: ComponentFixture<AddAccidentCollisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccidentCollisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccidentCollisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
