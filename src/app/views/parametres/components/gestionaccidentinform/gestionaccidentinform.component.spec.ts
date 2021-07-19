import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAccidentInformComponent } from './gestionaccidentinform.component';

describe('GestionAccidentInformComponent', () => {
  let component: GestionAccidentInformComponent;
  let fixture: ComponentFixture<GestionAccidentInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAccidentInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAccidentInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
