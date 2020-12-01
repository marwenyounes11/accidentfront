import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDegatPhysiqueComponent } from './add-degatphysique.component';

describe('AddDegatPhysiqueComponent', () => {
  let component: AddDegatPhysiqueComponent;
  let fixture: ComponentFixture<AddDegatPhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDegatPhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDegatPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
