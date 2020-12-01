import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegatMaterielComponent } from './degatmateriel.component';

describe('DegatMaterielComponent', () => {
  let component: DegatMaterielComponent;
  let fixture: ComponentFixture<DegatMaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegatMaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegatMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
