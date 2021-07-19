import { TestBed } from '@angular/core/testing';

import { DegatVictimeService } from './degatvictime.service';

describe('DegatVictimeService', () => {
  let service: DegatVictimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DegatVictimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
