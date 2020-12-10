import { TestBed } from '@angular/core/testing';

import { TopLibService } from './top-lib.service';

describe('TopLibService', () => {
  let service: TopLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
