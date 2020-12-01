import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtincteurComponent } from './add-extincteur.component';

describe('AddExtincteurComponent', () => {
  let component: AddExtincteurComponent;
  let fixture: ComponentFixture<AddExtincteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExtincteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExtincteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
