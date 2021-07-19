import { TestBed } from '@angular/core/testing';

import { DroitRolesService } from './droitroles.service';

describe('DroitRolesService', () => {
  let service: DroitRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DroitRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
