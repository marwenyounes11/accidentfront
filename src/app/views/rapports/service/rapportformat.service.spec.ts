import { TestBed } from '@angular/core/testing';

import { RapportFormatService } from './rapportformat.service';

describe('RapportFormatService', () => {
  let service: RapportFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
