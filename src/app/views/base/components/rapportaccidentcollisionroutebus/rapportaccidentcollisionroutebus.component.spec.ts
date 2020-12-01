import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportAccidentCollisionRouteBusComponent } from './rapportaccidentcollisionroutebus.component';

describe('RapportAccidentCollisionRouteBusComponent', () => {
  let component: RapportAccidentCollisionRouteBusComponent;
  let fixture: ComponentFixture<RapportAccidentCollisionRouteBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportAccidentCollisionRouteBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportAccidentCollisionRouteBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
