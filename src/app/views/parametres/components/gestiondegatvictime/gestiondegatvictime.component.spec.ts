import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDegatVictimeComponent } from './gestiondegatvictime.component';

describe('GestionDegatVictimeComponent', () => {
  let component: GestionDegatVictimeComponent;
  let fixture: ComponentFixture<GestionDegatVictimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDegatVictimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDegatVictimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
