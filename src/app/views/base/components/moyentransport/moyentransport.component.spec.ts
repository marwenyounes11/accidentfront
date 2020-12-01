import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyentransportComponent } from './moyentransport.component';

describe('MoyentransportComponent', () => {
  let component: MoyentransportComponent;
  let fixture: ComponentFixture<MoyentransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoyentransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyentransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
