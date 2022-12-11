import { TestBed } from '@angular/core/testing';

import { NextFlightsService } from './next-flights.service';

describe('NextFlightsService', () => {
  let service: NextFlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextFlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
