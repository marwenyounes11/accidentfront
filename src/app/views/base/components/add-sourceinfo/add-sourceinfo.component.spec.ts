import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSourceInfoComponent } from './add-sourceinfo.component';

describe('AddSourceinfoComponent', () => {
  let component: AddSourceInfoComponent;
  let fixture: ComponentFixture<AddSourceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSourceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSourceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
