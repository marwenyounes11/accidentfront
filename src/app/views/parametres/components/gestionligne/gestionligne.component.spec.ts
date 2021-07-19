import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLigneComponent } from './gestionligne.component';

describe('GestionLigneComponent', () => {
  let component: GestionLigneComponent;
  let fixture: ComponentFixture<GestionLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
