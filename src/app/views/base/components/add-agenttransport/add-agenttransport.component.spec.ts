import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgentTransportComponent } from './add-agenttransport.component';

describe('AddAgentTransportComponent', () => {
  let component: AddAgentTransportComponent;
  let fixture: ComponentFixture<AddAgentTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgentTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgentTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
