import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import {
  apply,
  debounce,
  form,
  FormField,
  FormRoot,
  validateAsync,
} from '@angular/forms/signals';
import { ActivatedRoute } from '@angular/router';
import { type } from '@ngrx/signals';
import { Dispatcher, eventGroup } from '@ngrx/signals/events';
import { map } from 'rxjs';
import { FlightCard } from '../flight-card';
import { FlightStore } from '../flight-store';
import { Flight, parseFlights } from '../model/flight';
import { searchSchema } from '../model/search-parameters';

export const flightEvents = eventGroup({
  source: 'Flights',
  events: {
    search: type<{ from: string; to: string }>(),
    reload: type<void>(),
  },
});

type Status = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [FormsModule, JsonPipe, FlightCard, FormField, FormRoot],
})
export class FlightSearchComponent {
  private readonly flightClient = inject(FlightStore);
  private readonly route = inject(ActivatedRoute);
  private readonly dispatcher = inject(Dispatcher);

  selectedFlight = signal<Flight | undefined>(undefined);
  message = signal('');
  flights = this.flightClient.flights;
  httpClient = inject(HttpClient);

  searchModel = linkedSignal(this.flightClient.currentSearch);

  searchForm = form(
    this.searchModel,
    (path) => {
      apply(path, searchSchema);

      debounce(path.from, 2000);

      validateAsync(path.from, {
        params: (ctx) => ctx.value(),
        factory: (params) => {
          return rxResource({
            params: params,
            stream: () =>
              this.httpClient
                .get('https://demo.angulararchitects.io/api/flight')
                .pipe(
                  map(parseFlights),
                  map((flights) => {
                    return Boolean(
                      flights.find(
                        (flight) =>
                          flight.from === params() || flight.to === params(),
                      ),
                    );
                  }),
                ),
          });
        },
        onSuccess: (foundFlight) => {
          return foundFlight
            ? undefined
            : { kind: 'unknown city', message: 'This city is not reachable' };
        },
        onError: () => {
          return undefined;
        },
      });
    },
    {
      submission: {
        action: async () => {
          this.dispatcher.dispatch(
            flightEvents.search({
              from: this.searchModel().from,
              to: this.searchModel().to,
            }),
          );
        },
        ignoreValidators: 'none',
      },
    },
  );

  constructor() {
    const { from, to } = this.route.snapshot.queryParams;
    if (from && to) {
      this.flightClient.search(from, to);
    }
  }

  basket: { [key: number]: boolean } = {
    1: true,
    2: false,
    3: true,
  };

  prettySearch = computed(() => {
    const { from, to } = this.flightClient.currentSearch();
    if (!this.flights.hasValue()) {
      return '-';
    }

    return `Search from ${from} to ${to}: ${this.flights.value().length} found`;
  });

  reload() {
    this.flightClient.reload();
  }

  save(): void {}

  select(f: Flight): void {
    this.selectedFlight.set({ ...f });
  }

  increaseId(flight: Flight) {
    return { ...flight, id: flight.id + 1 };
  }

  // Show Case when structured clone is not the best - modify only one property
  protected reset() {
    this.flightClient.reset();
  }

  protected selectFlight(selected: boolean, id: number) {
    this.basket[id] = selected;
  }
}

export default FlightSearchComponent;
