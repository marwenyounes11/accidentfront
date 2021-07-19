import { TestBed } from '@angular/core/testing';

import { MoyenTransportService } from './moyentransport.service';

describe('MoyentransportService', () => {
  let service: MoyenTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoyenTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
