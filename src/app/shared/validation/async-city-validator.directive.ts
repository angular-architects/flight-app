import { Directive, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable } from 'rxjs';
import { FlightService } from 'src/app/flight-booking/flight-search/flight.service';

@Directive({
  selector: '[asyncCity]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidatorDirective,
      multi: true,
    },
  ],
})
export class AsyncCityValidatorDirective implements AsyncValidator {
  private flightService = inject(FlightService);

  validate(c: AbstractControl): Observable<ValidationErrors | null> {
    return this.flightService.find(c.value, '').pipe(
      map((flights) => (flights.length > 0 ? null : { asyncCity: true })),
      delay(4000)
    );
  }
}
