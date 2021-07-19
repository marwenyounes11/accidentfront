import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationPrixDegatParTypeAccidentComponent } from './estimationprixdegatpartypeaccident.component';

describe('EstimationPrixDegatParTypeAccidentComponent', () => {
  let component: EstimationPrixDegatParTypeAccidentComponent;
  let fixture: ComponentFixture<EstimationPrixDegatParTypeAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationPrixDegatParTypeAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationPrixDegatParTypeAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
