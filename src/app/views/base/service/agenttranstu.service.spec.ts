import { TestBed } from '@angular/core/testing';

import { AgentTranstuService } from './agenttranstu.service';

describe('AgentTranstuService', () => {
  let service: AgentTranstuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentTranstuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
