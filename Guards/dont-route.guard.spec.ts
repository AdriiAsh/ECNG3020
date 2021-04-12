import { TestBed } from '@angular/core/testing';

import { DontRouteGuard } from './dont-route.guard';

describe('DontRouteGuard', () => {
  let guard: DontRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DontRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
