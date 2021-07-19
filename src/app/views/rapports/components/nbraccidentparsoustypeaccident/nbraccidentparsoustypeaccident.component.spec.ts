import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {NbrAccidentParSousTypeAccidentComponent } from './nbraccidentparsoustypeaccident.component';

describe('NbrAccidentParSousTypeAccidentComponent', () => {
  let component:NbrAccidentParSousTypeAccidentComponent;
  let fixture: ComponentFixture<NbrAccidentParSousTypeAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NbrAccidentParSousTypeAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrAccidentParSousTypeAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
