import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTgmComponent } from './add-tgm.component';

describe('AddTgmComponent', () => {
  let component: AddTgmComponent;
  let fixture: ComponentFixture<AddTgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTgmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
