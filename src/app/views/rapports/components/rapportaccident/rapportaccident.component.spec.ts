import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportAccidentComponent } from './rapportaccident.component';

describe('RapportAccidentComponent', () => {
  let component: RapportAccidentComponent;
  let fixture: ComponentFixture<RapportAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
