import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrAccidentParDateComponent } from './nbraccidentpardate.component';

describe('NbrAccidentParDateComponent', () => {
  let component: NbrAccidentParDateComponent;
  let fixture: ComponentFixture<NbrAccidentParDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrAccidentParDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrAccidentParDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
