import { Component, computed, inject, linkedSignal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { DateCvaDirective } from '@demo/shared/ui-common';
import { FlightDetailStore } from '../flight-detail.store';
import {
  apply,
  Control,
  customError,
  disabled,
  Field,
  FieldPath,
  form,
  hidden,
  readonly,
  required,
  schema,
  submit,
  validate,
  validateAsync,
  validateHttp,
  validateTree,
} from '@angular/forms/signals';
import { Flight } from '@demo/ticketing/data';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, map, Observable, of } from 'rxjs';

const flightSchema = schema<Flight>((path) => {
  required(path.from);
  required(path.to);
  validateCity(path.from, ['Graz', 'Frankfurt', 'New York', 'Paris', 'London']);
  validateCityAsync(path.to);
  validateCityHttp(path.to);
  validateRoundTripTree(path);

  // apply(path.plane, planeSchema)
  // applyEach(path.prices, priceSchema)
  // applyWhen(path, (ctx) => ctx.valueOf(delayed), delayedFlight)

  disabled(path.to, (ctx) => ctx.valueOf(path.delayed));
  readonly(path.to, (ctx) => ctx.valueOf(path.delayed));

  // next.2, next.5
  hidden(path.to, (ctx) => ctx.valueOf(path.delayed));
});

const flightEditSchema = schema<Flight>((path) => {
  apply(path, flightSchema);
  validateForLock(path.id);
});

function validateCityAsync(schema: FieldPath<string>) {
  validateAsync(schema, {
    params: (ctx) => ({
      value: ctx.value(),
    }),
    factory: (params) => {
      return rxResource({
        params,
        stream: (p) => {
          return rxValidateAirport(p.params.value);
        },
      });
    },
    errors: (result, _ctx) => {
      if (!result) {
        return {
          kind: 'airport_not_found',
        };
      }
      return null;
    },
  });
}

function validateCityHttp(schema: FieldPath<string>) {
  validateHttp(schema, {
    request: (ctx) => ({
      url: 'https://demo.angulararchitects.io/api/flight',
      params: {
        from: ctx.value(),
      },
    }),
    errors: (result: Flight[], _ctx) => {
      if (result.length === 0) {
        return {
          kind: 'airport_not_found_http',
        };
      }
      return null;
    },
  });
}

// Simulates a server-side validation
function rxValidateAirport(airport: string): Observable<boolean> {
  const allowed = ['Graz', 'Hamburg', 'Zürich', 'London', 'Paris', 'New York'];
  return of(null).pipe(
    delay(2000),
    map(() => allowed.includes(airport))
  );
}

function validateRoundTripTree(schema: FieldPath<Flight>) {
  validateTree(schema, (ctx) => {
    const from = ctx.field.from().value();
    const to = ctx.field.to().value();

    if (from === to) {
      return [
        {
          kind: 'roundtrip_tree',
          field: ctx.field.from,
          from,
          to,
        },
        {
          kind: 'roundtrio_tree',
          field: ctx.field.to,
          from,
          to,
        },
      ];
    }
    return null;
  });
}

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, DateCvaDirective, Control, JsonPipe],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  private route = inject(ActivatedRoute);

  private store = inject(FlightDetailStore);
  flight = linkedSignal(() => this.store.flightValue());

  error = this.store.saveFlightError;
  isPending = this.store.saveFlightIsPending;
  isLoading = this.store.flightIsLoading;

  showIndicator = computed(() => this.isLoading() || this.isPending());

  // saveFlightValue = this.store.saveFlightValue

  flightForm = form(this.flight, flightEditSchema);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id')) ?? 0;
      this.store.updateId(id);
    });
  }

  saveFlight(): void {
    // TODO: use validation details from backend

    submit(this.flightForm, async (flightForm) => {
      const value = flightForm().value();
      const result = await this.store.saveFlight(value);

      if (result.status === 'error') {
        return {
          kind: 'server_error',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          message: 'Server error: ' + (result.error as any).message,
        };
      }
      return null;
    });
  }
}

function validateForLock(path: FieldPath<number>) {
  validate(path, (ctx) => {
    if (ctx.value() <= 10) {
      return customError({
        kind: 'locked_flight',
        message: 'You are not allowed to edit this flight!',
      });
    }
    return null;
  });
}

// -- put it to different files in practice --

function validateCity(path: FieldPath<string>, allowedCities: string[]) {
  validate(path, (ctx) => {
    const from = ctx.value();
    if (allowedCities.includes(from)) {
      return null;
    }
    return customError({
      kind: 'city_not_supported',
      message: 'This airport is not suported',
      actual: from,
      allowed: allowedCities,
    });
  });
}
