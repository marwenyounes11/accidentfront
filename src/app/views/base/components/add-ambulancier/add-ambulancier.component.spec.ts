import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmbulancierComponent } from './add-ambulancier.component';

describe('AddAmbulancierComponent', () => {
  let component: AddAmbulancierComponent;
  let fixture: ComponentFixture<AddAmbulancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmbulancierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmbulancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
