import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimeComponent } from './victime.component';

describe('VictimeComponent', () => {
  let component: VictimeComponent;
  let fixture: ComponentFixture<VictimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
