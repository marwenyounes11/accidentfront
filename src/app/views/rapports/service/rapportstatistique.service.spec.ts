import { TestBed } from '@angular/core/testing';

import { RapportStatistiqueService } from './rapportstatistique.service';

describe('RapportStatistiqueService', () => {
  let service: RapportStatistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportStatistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
