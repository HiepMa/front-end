import { TestBed } from '@angular/core/testing';

import { MonhocService } from './monhoc.service';

describe('MonhocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonhocService = TestBed.get(MonhocService);
    expect(service).toBeTruthy();
  });
});
