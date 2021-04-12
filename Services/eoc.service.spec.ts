import { TestBed } from '@angular/core/testing';

import { EOCService } from './eoc.service';

describe('EOCService', () => {
  let service: EOCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EOCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
