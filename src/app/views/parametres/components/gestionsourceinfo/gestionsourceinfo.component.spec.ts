import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSourceInfoComponent } from './gestionsourceinfo.component';

describe('GestionSourceinfoComponent', () => {
  let component: GestionSourceInfoComponent;
  let fixture: ComponentFixture<GestionSourceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSourceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSourceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
