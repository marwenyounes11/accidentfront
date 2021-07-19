import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrAccidentParTypeAccidentComponent } from './nbraccidentpartypeaccident.component';

describe('NbrAccidentParTypeAccidentComponent', () => {
  let component: NbrAccidentParTypeAccidentComponent;
  let fixture: ComponentFixture<NbrAccidentParTypeAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrAccidentParTypeAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrAccidentParTypeAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
