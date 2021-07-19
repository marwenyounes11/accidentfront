import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationPrixDegatParSousTypeAccidentComponent } from './estimationprixdegatparsoustypeaccident.component';

describe('EstimationPrixDegatParSousTypeAccidentComponent', () => {
  let component: EstimationPrixDegatParSousTypeAccidentComponent;
  let fixture: ComponentFixture<EstimationPrixDegatParSousTypeAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationPrixDegatParSousTypeAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationPrixDegatParSousTypeAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
