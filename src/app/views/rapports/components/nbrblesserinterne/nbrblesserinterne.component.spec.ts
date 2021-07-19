import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {NbrBlesserInterneComponent } from './nbrblesserinterne.component';

describe('NbrBlesserInterneComponent', () => {
  let component:NbrBlesserInterneComponent;
  let fixture: ComponentFixture<NbrBlesserInterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NbrBlesserInterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrBlesserInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
