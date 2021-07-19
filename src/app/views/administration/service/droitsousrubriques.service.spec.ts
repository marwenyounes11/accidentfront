import { TestBed } from '@angular/core/testing';

import { DroitSousRubriquesService } from './droitsousrubriques.service';

describe('DroitSousRubriquesService', () => {
  let service: DroitSousRubriquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DroitSousRubriquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
