import { TestBed } from '@angular/core/testing';

import { RapportAccidentService } from './rapportaccident.service';

describe('RapportAccidentService', () => {
  let service: RapportAccidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportAccidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
