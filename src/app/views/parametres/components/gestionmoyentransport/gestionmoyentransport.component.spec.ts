import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionMoyenTransportComponent } from './gestionmoyentransport.component';


describe('GestionMoyenTransportComponent', () => {
  let component: GestionMoyenTransportComponent;
  let fixture: ComponentFixture<GestionMoyenTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionMoyenTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMoyenTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
