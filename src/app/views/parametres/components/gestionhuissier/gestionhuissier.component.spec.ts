import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHuissierComponent } from './gestionhuissier.component';

describe('GestionHuissierComponent', () => {
  let component: GestionHuissierComponent;
  let fixture: ComponentFixture<GestionHuissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionHuissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionHuissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
