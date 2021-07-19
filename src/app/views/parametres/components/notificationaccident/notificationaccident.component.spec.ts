import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAccidentComponent } from './notificationaccident.component';

describe('NotificationAccidentComponent', () => {
  let component: NotificationAccidentComponent;
  let fixture: ComponentFixture<NotificationAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
