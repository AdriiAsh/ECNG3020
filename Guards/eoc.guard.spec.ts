import { TestBed } from '@angular/core/testing';

import { EOCGuard } from './eoc.guard';

describe('EOCGuard', () => {
  let guard: EOCGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EOCGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
