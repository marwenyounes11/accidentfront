import { TestBed } from '@angular/core/testing';

import { RubriqueRoleService } from './rubriquerole.service';

describe('RubriqueRoleService', () => {
  let service: RubriqueRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubriqueRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
