import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDegatMaterielComponent } from './add-degatmateriel.component';

describe('AddDegatMaterielComponent', () => {
  let component: AddDegatMaterielComponent;
  let fixture: ComponentFixture<AddDegatMaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDegatMaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDegatMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
