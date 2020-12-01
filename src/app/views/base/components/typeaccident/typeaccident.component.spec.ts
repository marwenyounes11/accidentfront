import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAccidentComponent } from './typeaccident.component';

describe('TypeaccidentComponent', () => {
  let component: TypeAccidentComponent;
  let fixture: ComponentFixture<TypeAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
