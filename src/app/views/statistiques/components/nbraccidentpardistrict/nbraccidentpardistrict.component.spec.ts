import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrAccidentParDistrictComponent } from './nbraccidentpardistrict.component';

describe('NbrAccidentParDistrictComponent', () => {
  let component: NbrAccidentParDistrictComponent;
  let fixture: ComponentFixture<NbrAccidentParDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrAccidentParDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrAccidentParDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
