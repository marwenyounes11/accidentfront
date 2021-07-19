import { TestBed } from '@angular/core/testing';

import { AmbulancierService } from './ambulancier.service';

describe('AmbulancierService', () => {
  let service: AmbulancierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbulancierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
