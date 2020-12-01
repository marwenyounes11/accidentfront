import { TestBed } from '@angular/core/testing';

import { AgentInterventionService } from './agentintervention.service';

describe('AgentInterventionService', () => {
  let service: AgentInterventionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentInterventionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
