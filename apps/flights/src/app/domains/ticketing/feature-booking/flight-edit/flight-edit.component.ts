import { httpResource } from '@angular/common/http';
import { Component, computed, effect, inject, input, numberAttribute } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  Control,
  createProperty,
  customError,
  FieldPath,
  form,
  property,
  required,
  schema,
  validate,
} from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { Flight, FlightService, initFlight } from '@demo/ticketing/data';
import { delay, switchMap } from 'rxjs';

// Custom Field Property
const ALLOWED_CITIES = createProperty<string[]>();

// Custom Validator
function validateCity(field: FieldPath<string>, cities: string[]): void {
  // Set Custom Field Property
  property(field, ALLOWED_CITIES, () => cities);
  validate(field, ({ value }) =>
    !cities.find((city) => city.startsWith(value()) || value().startsWith(city))
      ? customError({
          kind: 'forbiddenCity',
          message:
            'This city name is not allowed. Please use one of the following: ' +
            cities.join(', '),
        })
      : undefined
  );
}

// (3) Field Logic: validators, async validators, readonly, hidden, disables
const flightSchema = schema<Flight>((flightPath) => {
  required(flightPath.from);
  validateCity(flightPath.from, [
    'New York',
    'Los Angeles',
    'Berlin',
    'Paris',
  ]);
  required(flightPath.to);
  validateCity(flightPath.to, ['London', 'Berlin', 'Madrid']);
});

@Component({
  selector: 'app-flight-edit',
  imports: [
    RouterLink,
    // (4) UI Control: Template Binding
    Control,
  ],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  private flightService = inject(FlightService);

  id = input(0, { transform: numberAttribute });

  flight = toSignal(
    toObservable(this.id).pipe(
      switchMap(id => this.flightService.findById(id)),
      delay(3_000)
    ), { initialValue: initFlight }
  );

  // (1) Data Model: Writable Signal
  flightResource = httpResource<Flight>(
    () => ({
      url: 'https://demo.angulararchitects.io/api/flight',
      params: { id: this.id() },
    }),
    { defaultValue: initFlight }
  );

  // (2) Field State: value, valid, touched, dirty, ...
  editForm = form(this.flightResource.value, flightSchema);
  fromAllowedCities = computed(() =>
    this.editForm.from().property(ALLOWED_CITIES)
  );
  toAllowedCities = computed(() => this.editForm.to().property(ALLOWED_CITIES));

  constructor() {
    effect(() => console.log(
      'Flight as Signal fetched with RxJS Interop:',
      this.flight()
    ));
  }
  save(): void {
    console.log(this.flightResource.value());
  }
}
