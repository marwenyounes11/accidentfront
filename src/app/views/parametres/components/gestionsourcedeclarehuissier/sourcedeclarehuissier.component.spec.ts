import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDeclareHuissierComponent } from './sourcedeclarehuissier.component';

describe('SourceDeclareHuissierComponent', () => {
  let component: SourceDeclareHuissierComponent;
  let fixture: ComponentFixture<SourceDeclareHuissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceDeclareHuissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDeclareHuissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
