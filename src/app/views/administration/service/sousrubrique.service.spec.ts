import { TestBed } from '@angular/core/testing';

import { SousRubriqueService } from './sousrubrique.service';

describe('SousRubriqueService', () => {
  let service: SousRubriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousRubriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
