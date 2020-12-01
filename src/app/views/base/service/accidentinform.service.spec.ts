import { TestBed } from '@angular/core/testing';

import { AccidentInformService } from './accidentinform.service';

describe('AccidentInformService', () => {
  let service: AccidentInformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccidentInformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
