import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDepotComponent } from './gestiondepot.component';

describe('GestionDepotComponent', () => {
  let component: GestionDepotComponent;
  let fixture: ComponentFixture<GestionDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
