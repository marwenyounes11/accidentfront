import { TestBed } from '@angular/core/testing';

import { SourceDeclareHuissierService } from './sourcedeclarehuissier.service';

describe('SourceDeclareHuissierService', () => {
  let service: SourceDeclareHuissierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceDeclareHuissierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
