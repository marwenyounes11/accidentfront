import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecuriteComponent } from './add-securite.component';

describe('AddSecuriteComponent', () => {
  let component: AddSecuriteComponent;
  let fixture: ComponentFixture<AddSecuriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSecuriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
