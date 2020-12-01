import { TestBed } from '@angular/core/testing';

import {SousTypeAccidentService } from './soustypeaccident.service';

describe('SoustypeaccidentService', () => {
  let service: SousTypeAccidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousTypeAccidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
