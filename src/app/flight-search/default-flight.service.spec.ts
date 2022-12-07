import { TestBed } from '@angular/core/testing';

import { DefaultFlightService } from './default-flight.service';

describe('DefaultFlightService', () => {
  let service: DefaultFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
