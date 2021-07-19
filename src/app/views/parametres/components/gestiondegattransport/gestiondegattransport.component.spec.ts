import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDegatTransportComponent } from './gestiondegattransport.component';

describe('GestionDegatTransportComponent', () => {
  let component: GestionDegatTransportComponent;
  let fixture: ComponentFixture<GestionDegatTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDegatTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDegatTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
