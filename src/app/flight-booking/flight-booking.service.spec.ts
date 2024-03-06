import { TestBed } from '@angular/core/testing';

import { FlightBookingService } from './flight-booking.service';

describe('FlightBookingService', () => {
  let service: FlightBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
