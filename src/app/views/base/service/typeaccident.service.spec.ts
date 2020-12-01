import { TestBed } from '@angular/core/testing';

import { TypeAccidentService } from './typeaccident.service';

describe('TypeaccidentService', () => {
  let service: TypeAccidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeAccidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
