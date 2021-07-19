import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulancierComponent } from './ambulancier.component';

describe('AmbulancierComponent', () => {
  let component: AmbulancierComponent;
  let fixture: ComponentFixture<AmbulancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulancierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
