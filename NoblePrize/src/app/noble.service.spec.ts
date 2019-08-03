import { TestBed } from '@angular/core/testing';

import { NobleService } from './noble.service';

describe('NobleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NobleService = TestBed.get(NobleService);
    expect(service).toBeTruthy();
  });
});
