import { TestBed } from '@angular/core/testing';

import { AccidentTransportService } from './accidenttransport.service';

describe('AccidentTransportService', () => {
  let service: AccidentTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccidentTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
