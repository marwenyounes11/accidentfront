import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoustypeaccidentComponent } from './soustypeaccident.component';

describe('SoustypeaccidentComponent', () => {
  let component: SoustypeaccidentComponent;
  let fixture: ComponentFixture<SoustypeaccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoustypeaccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoustypeaccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
