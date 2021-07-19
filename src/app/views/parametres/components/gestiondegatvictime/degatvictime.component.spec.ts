import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegatVictimeComponent } from './degatvictime.component';

describe('DegatVictimeComponent', () => {
  let component: DegatVictimeComponent;
  let fixture: ComponentFixture<DegatVictimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DegatVictimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegatVictimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
