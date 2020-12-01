import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHuissierComponent } from './add-huissier.component';

describe('AddHuissierComponent', () => {
  let component: AddHuissierComponent;
  let fixture: ComponentFixture<AddHuissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHuissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHuissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
