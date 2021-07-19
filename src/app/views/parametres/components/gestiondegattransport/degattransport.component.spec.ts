import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegatTransportComponent } from './degattransport.component';

describe('DegatTransportComponent', () => {
  let component: DegatTransportComponent;
  let fixture: ComponentFixture<DegatTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DegatTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegatTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
