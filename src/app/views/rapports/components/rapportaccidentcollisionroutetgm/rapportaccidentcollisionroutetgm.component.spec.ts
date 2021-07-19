import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportAccidentCollisionRouteTgmComponent } from './rapportaccidentcollisionroutetgm.component';

describe('RapportAccidentCollisionRouteTgmComponent', () => {
  let component: RapportAccidentCollisionRouteTgmComponent;
  let fixture: ComponentFixture<RapportAccidentCollisionRouteTgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportAccidentCollisionRouteTgmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportAccidentCollisionRouteTgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
