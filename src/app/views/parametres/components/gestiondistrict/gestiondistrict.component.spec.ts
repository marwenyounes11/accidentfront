import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDistrictComponent } from './gestiondistrict.component';

describe('GestionDistrictComponent', () => {
  let component: GestionDistrictComponent;
  let fixture: ComponentFixture<GestionDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
