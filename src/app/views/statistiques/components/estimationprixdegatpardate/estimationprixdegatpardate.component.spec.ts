import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationPrixDegatParDateComponent } from './estimationprixdegatpardate.component';

describe('EstimationPrixDegatParDateComponent', () => {
  let component: EstimationPrixDegatParDateComponent;
  let fixture: ComponentFixture<EstimationPrixDegatParDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationPrixDegatParDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationPrixDegatParDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
