import { TestBed } from '@angular/core/testing';

import { CustomBreakpointsService } from './custom-breakpoints.service';

describe('CustomBreakpointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomBreakpointsService = TestBed.get(CustomBreakpointsService);
    expect(service).toBeTruthy();
  });
});
