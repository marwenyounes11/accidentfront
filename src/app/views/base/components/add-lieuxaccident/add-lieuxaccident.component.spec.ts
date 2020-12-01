import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLieuxAccidentComponent } from './add-lieuxaccident.component';

describe('AddLieuxaccidentComponent', () => {
  let component: AddLieuxAccidentComponent;
  let fixture: ComponentFixture<AddLieuxAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLieuxAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLieuxAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
