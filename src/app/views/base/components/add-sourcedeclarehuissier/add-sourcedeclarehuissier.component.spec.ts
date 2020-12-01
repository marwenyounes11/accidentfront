import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSourceDeclareHuissierComponent } from './add-sourcedeclarehuissier.component';

describe('AddSourceDeclareHuissierComponent', () => {
  let component: AddSourceDeclareHuissierComponent;
  let fixture: ComponentFixture<AddSourceDeclareHuissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSourceDeclareHuissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSourceDeclareHuissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
