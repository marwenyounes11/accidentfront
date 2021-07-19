import { TestBed } from '@angular/core/testing';

import { VictimeService } from './victime.service';

describe('VictimeService', () => {
  let service: VictimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VictimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
