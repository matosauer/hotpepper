import { TestBed } from '@angular/core/testing';

import { HotPepperService } from './hot-pepper.service';

describe('HotPepperService', () => {
  let service: HotPepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotPepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
