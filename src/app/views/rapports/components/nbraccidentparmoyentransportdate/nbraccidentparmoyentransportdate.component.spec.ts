import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrAccidentParMoyenTransportDateComponent } from './nbraccidentparmoyentransportdate.component';

describe('NbrAccidentParMoyenTransportDateComponent', () => {
  let component: NbrAccidentParMoyenTransportDateComponent;
  let fixture: ComponentFixture<NbrAccidentParMoyenTransportDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrAccidentParMoyenTransportDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrAccidentParMoyenTransportDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
