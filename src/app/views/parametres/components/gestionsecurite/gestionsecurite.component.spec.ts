import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSecuriteComponent } from './gestionsecurite.component';

describe('GestionSecuriteComponent', () => {
  let component: GestionSecuriteComponent;
  let fixture: ComponentFixture<GestionSecuriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSecuriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
