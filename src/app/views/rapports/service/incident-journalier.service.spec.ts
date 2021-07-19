import { TestBed } from '@angular/core/testing';

import { IncidentJournalierService } from './incident-journalier.service';

describe('IncidentJournalierService', () => {
  let service: IncidentJournalierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentJournalierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
