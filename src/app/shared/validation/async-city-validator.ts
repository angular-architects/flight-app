import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { delay, map } from 'rxjs';
import { FlightService } from 'src/app/flight-booking/flight-search/flight.service';

export function validateAsyncCity(
  flightService: FlightService
): AsyncValidatorFn {
  return (c: AbstractControl) => {
    return flightService.find(c.value, '').pipe(
      map((flights) => (flights.length > 0 ? null : { asyncCity: true })),
      delay(4000)
    );
  };
}
