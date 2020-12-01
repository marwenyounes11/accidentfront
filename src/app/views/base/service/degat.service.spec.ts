import { TestBed } from '@angular/core/testing';

import { DegatService } from './degat.service';

describe('DegatService', () => {
  let service: DegatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DegatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
