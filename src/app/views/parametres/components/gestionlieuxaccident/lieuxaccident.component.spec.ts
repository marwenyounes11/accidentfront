import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxAccidentComponent } from './lieuxaccident.component';

describe('LieuxaccidentComponent', () => {
  let component: LieuxAccidentComponent;
  let fixture: ComponentFixture<LieuxAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
