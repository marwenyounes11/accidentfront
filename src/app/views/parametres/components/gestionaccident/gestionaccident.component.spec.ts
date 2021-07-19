import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAccidentComponent } from './gestionaccident.component';

describe('GestionAccidentComponent', () => {
  let component: GestionAccidentComponent;
  let fixture: ComponentFixture<GestionAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
