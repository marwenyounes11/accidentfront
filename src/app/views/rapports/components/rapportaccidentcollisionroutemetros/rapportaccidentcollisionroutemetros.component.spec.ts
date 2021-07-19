import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportAccidentCollisionRouteMetrosComponent } from './rapportaccidentcollisionroutemetros.component';

describe('RapportAccidentCollisionRouteMetrosComponent', () => {
  let component: RapportAccidentCollisionRouteMetrosComponent;
  let fixture: ComponentFixture<RapportAccidentCollisionRouteMetrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportAccidentCollisionRouteMetrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportAccidentCollisionRouteMetrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
