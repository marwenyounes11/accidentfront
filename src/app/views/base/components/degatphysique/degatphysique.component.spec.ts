import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegatPhysiqueComponent } from './degatphysique.component';

describe('DegatPhysiqueComponent', () => {
  let component: DegatPhysiqueComponent;
  let fixture: ComponentFixture<DegatPhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegatPhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegatPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
