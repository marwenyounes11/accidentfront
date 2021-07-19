import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDegatComponent } from './gestiondegat.component';

describe('GestionDegatComponent', () => {
  let component: GestionDegatComponent;
  let fixture: ComponentFixture<GestionDegatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDegatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDegatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
