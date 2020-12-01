import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoucheIncendieComponent } from './add-boucheincendie.component';

describe('AddBoucheIncendieComponent', () => {
  let component: AddBoucheIncendieComponent;
  let fixture: ComponentFixture<AddBoucheIncendieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoucheIncendieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoucheIncendieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
