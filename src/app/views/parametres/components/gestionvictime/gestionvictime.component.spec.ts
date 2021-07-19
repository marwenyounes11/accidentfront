import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVictimeComponent } from './gestionvictime.component';

describe('GestionVictimeComponent', () => {
  let component: GestionVictimeComponent;
  let fixture: ComponentFixture<GestionVictimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVictimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVictimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
