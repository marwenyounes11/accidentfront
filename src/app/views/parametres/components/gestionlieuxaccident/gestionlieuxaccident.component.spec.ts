import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLieuxAccidentComponent } from './gestionlieuxaccident.component';

describe('GestionLieuxaccidentComponent', () => {
  let component: GestionLieuxAccidentComponent;
  let fixture: ComponentFixture<GestionLieuxAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLieuxAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLieuxAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
