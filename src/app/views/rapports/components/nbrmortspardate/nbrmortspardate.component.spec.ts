import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrMortsParDateComponent } from './nbrmortspardate.component';

describe('NbrMortsParDateComponent', () => {
  let component: NbrMortsParDateComponent;
  let fixture: ComponentFixture<NbrMortsParDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrMortsParDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrMortsParDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
