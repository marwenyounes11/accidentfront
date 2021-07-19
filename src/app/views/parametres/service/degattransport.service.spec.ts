
import { TestBed } from '@angular/core/testing';

import { DegatTransportService } from './degattransport.service';

describe('DegatTransportService', () => {
  let service: DegatTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DegatTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

