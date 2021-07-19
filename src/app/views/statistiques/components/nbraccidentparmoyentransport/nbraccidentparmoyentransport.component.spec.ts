import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrAccidentParMoyenTransportComponent } from './nbraccidentparmoyentransport.component';

describe('NbrAccidentParMoyenTransportComponent', () => {
  let component: NbrAccidentParMoyenTransportComponent;
  let fixture: ComponentFixture<NbrAccidentParMoyenTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrAccidentParMoyenTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrAccidentParMoyenTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
