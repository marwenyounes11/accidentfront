import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgentTranstuComponent } from './add-agenttranstu.component';

describe('AddAgentTranstuComponent', () => {
  let component: AddAgentTranstuComponent;
  let fixture: ComponentFixture<AddAgentTranstuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgentTranstuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgentTranstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
