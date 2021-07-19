import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAccidentTransportComponent } from './gestionaccidenttransport.component';

describe('GestionAccidentTransportComponent', () => {
  let component: GestionAccidentTransportComponent;
  let fixture: ComponentFixture<GestionAccidentTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAccidentTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAccidentTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
