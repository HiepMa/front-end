import { TestBed } from '@angular/core/testing';

import { TypeQuestionService } from './type-question.service';

describe('TypeQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeQuestionService = TestBed.get(TypeQuestionService);
    expect(service).toBeTruthy();
  });
});
