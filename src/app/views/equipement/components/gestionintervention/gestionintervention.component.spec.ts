import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInterventionComponent } from './gestionintervention.component';

describe('GestionInterventionComponent', () => {
  let component: GestionInterventionComponent;
  let fixture: ComponentFixture<GestionInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
