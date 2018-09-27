import { TestBed } from '@angular/core/testing';

import { GiaovienService } from './giaovien.service';

describe('GiaovienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiaovienService = TestBed.get(GiaovienService);
    expect(service).toBeTruthy();
  });
});
