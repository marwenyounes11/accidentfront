import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitRolesComponent } from './droitroles.component';

describe('DroitRolesComponent', () => {
  let component: DroitRolesComponent;
  let fixture: ComponentFixture<DroitRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroitRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
