import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {NbrBlesserExterneComponent } from './nbrblesserexterne.component';

describe('NbrBlesserExterneComponent', () => {
  let component:NbrBlesserExterneComponent;
  let fixture: ComponentFixture<NbrBlesserExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NbrBlesserExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrBlesserExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
