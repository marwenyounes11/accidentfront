import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSourceDeclareHuissierComponent } from './gestionsourcedeclarehuissier.component';

describe('GestionSourceDeclareHuissierComponent', () => {
  let component: GestionSourceDeclareHuissierComponent;
  let fixture: ComponentFixture<GestionSourceDeclareHuissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSourceDeclareHuissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSourceDeclareHuissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
