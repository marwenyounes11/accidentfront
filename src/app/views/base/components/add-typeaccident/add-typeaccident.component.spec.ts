import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeAccidentComponent } from './add-typeaccident.component';

describe('AddTypeAccidentComponent', () => {
  let component: AddTypeAccidentComponent;
  let fixture: ComponentFixture<AddTypeAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
