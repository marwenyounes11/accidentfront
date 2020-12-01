import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSousTypeAccidentComponent } from './add-soustypeaccident.component';

describe('AddSoustypeaccidentComponent', () => {
  let component: AddSousTypeAccidentComponent;
  let fixture: ComponentFixture<AddSousTypeAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSousTypeAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSousTypeAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
