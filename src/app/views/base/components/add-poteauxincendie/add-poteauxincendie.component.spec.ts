import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoteauxIncendieComponent } from './add-poteauxincendie.component';

describe('AddPoteauxIncendieComponent', () => {
  let component: AddPoteauxIncendieComponent;
  let fixture: ComponentFixture<AddPoteauxIncendieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoteauxIncendieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoteauxIncendieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
