import { TestBed } from '@angular/core/testing';

import { RapportAccidentCollisionRouteService } from './rapportaccidentcollisionroute.service';

describe('RapportAccidentCollisionRouteService', () => {
  let service: RapportAccidentCollisionRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportAccidentCollisionRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
