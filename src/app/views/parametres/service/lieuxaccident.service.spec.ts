import { TestBed } from '@angular/core/testing';

import {LieuxAccidentService } from './lieuxaccident.service';

describe('LieuxAccidentService', () => {
  let service: LieuxAccidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LieuxAccidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
