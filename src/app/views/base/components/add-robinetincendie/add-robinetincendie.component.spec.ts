import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRobinetIncendieComponent } from './add-robinetincendie.component';

describe('AddRobinetIncendieComponent', () => {
  let component: AddRobinetIncendieComponent;
  let fixture: ComponentFixture<AddRobinetIncendieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRobinetIncendieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRobinetIncendieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
