import { TestBed } from '@angular/core/testing';

import { LieuxaccidentService } from './lieuxaccident.service';

describe('LieuxaccidentService', () => {
  let service: LieuxaccidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LieuxaccidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
