import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDepartementComponent } from './gestiondepartement.component';

describe('GestionDepartementComponent', () => {
  let component: GestionDepartementComponent;
  let fixture: ComponentFixture<GestionDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
