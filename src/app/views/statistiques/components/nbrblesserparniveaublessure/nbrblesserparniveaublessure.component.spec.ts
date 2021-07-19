import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {NbrBlesserParNiveauBlessureComponent } from './nbrblesserparniveaublessure.component';

describe('NbrBlesserParNiveauBlessureComponent', () => {
  let component:NbrBlesserParNiveauBlessureComponent;
  let fixture: ComponentFixture<NbrBlesserParNiveauBlessureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NbrBlesserParNiveauBlessureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrBlesserParNiveauBlessureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
