import { TestBed } from '@angular/core/testing';

import { SourceInfoService } from './sourceinfo.service';

describe('SourceinfoService', () => {
  let service: SourceInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
