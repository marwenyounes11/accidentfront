import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAmbulancierComponent } from './gestionambulancier.component';

describe('GestionAmbulancierComponent', () => {
  let component: GestionAmbulancierComponent;
  let fixture: ComponentFixture<GestionAmbulancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAmbulancierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAmbulancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
