import { TestBed } from '@angular/core/testing';

import { AgentTransportService } from './agenttransport.service';

describe('AgentTransportService', () => {
  let service: AgentTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
