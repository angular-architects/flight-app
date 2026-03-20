import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  linkedSignal,
  NgZone,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  disabled,
  form,
  FormField,
  FormRoot,
  hidden,
  required,
  validate,
  validateAsync,
  validateStandardSchema,
} from '@angular/forms/signals';
import { Flight, FlightService } from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightStore } from '../flight-store';
import { searchParamsSchema } from '../search-params';

// import { CheckinService } from '@demo/checkin/data/checkin.service';

/**
 * 1. Reactive Context
 * 2. Dynamic Dependency Tracking
 * 3. Glitch-Free
 */

// type Flights = { status: 'idle' | 'loading' } | { status: "error", error: Error } | {
//   status: 'resolved',
//   value: Flight[]
// }

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormField, FormRoot, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  protected readonly flightStore = inject(FlightStore);
  protected readonly flightService = inject(FlightService);

  searchParams = linkedSignal(this.flightStore.searchParams);

  searchForm = form(
    this.searchParams,
    (path) => {
      validateStandardSchema(path, searchParamsSchema);

      validate(path.to, (ctx) => {
        if (ctx.value() === 'Olten') {
          return {
            kind: 'city',
            message: 'Hauptsache weg',
          };
        }

        return undefined;
      });

      disabled(path.to, (ctx) => ctx.valueOf(path.from) === 'Olten');
      hidden(path.to, (ctx) => ctx.valueOf(path.from) === 'Wien');

      validateAsync(path.from, {
        params: (ctx) => ctx.value(),
        factory: (params) =>
          this.flightService.createResource(() => {
            const from = params();
            return from ? { from, to: '' } : undefined;
          }),
        onSuccess: (flights) =>
          flights.length > 0
            ? undefined
            : {
                kind: 'asyncCity',
                message: 'Von dieser Stadt wird nicht geflogen',
              },
        onError: () => ({ kind: 'network', message: 'Geht nicht' }),
      });
    },
    {
      submission: {
        action: async (form) => void this.flightStore.search(form().value()),
      },
    }
  );

  from = linkedSignal({
    source: this.flightStore.searchParams,
    computation: (source) => source.from,
  });
  to = linkedSignal(() => this.flightStore.searchParams().to);

  flights = this.flightStore.flights;

  flightsCount = this.flightStore.flightsCount;

  // Wird jetzt von searchForm.submission übernommen
  // search(): void {
  // this.flightStore.search(this.searchParams())
  // }

  constructor() {
    // Reactive Suche
    // this.flightStore.search(() => this.searchForm().valid() ? this.searchParams() : undefined);
  }

  // httpFlights = httpResource(() => ({
  //   url: '',
  //   params: ({from: this.from(), to: this.to()})
  // }))

  // flights = toSignal(
  //   combineLatest({ from: toObservable(this.from), to: toObservable(this.to) }).pipe(
  //     switchMap(({ from, to }) => {
  //       return concat(
  //         of({ status: "loading" }),
  //         this.flightService.find(from, to).pipe(
  //           catchError((err) => of({ status: 'error', error: err })),
  //           map((value) => ({ status: 'resolved', value })))
  //       ) as Observable<Flights>
  //     }),
  //   ), { initialValue: { status: 'idle' } })

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  prettySearch = computed(() => {
    return `${this.from()} nach ${this.to()}`;
  });

  logPrettySearch() {
    const value = this.flightStore.favourites;
    console.log(this.prettySearch());
  }

  introduce(value: string | Date) {
    if (typeof value === 'string') {
      value.toLowerCase();
    } else if (value instanceof Date) {
      value.getTime();
    }
  }

  handleClick() {
    console.log('ist nichts...');
  }

  delay(): void {
    // this.flights = this.toFlightsWithDelays(this.flights, 15);
  }

  reverse() {
    this.flightStore.reverseSearch();
    console.log(
      `Flugsuche wurde geändert auf: ${this.from()} nach ${this.to()}`
    );
  }

  toFlightsWithDelays(flights: Flight[], delay: number): Flight[] {
    if (flights.length === 0) {
      return [];
    }

    const oldFlights = flights;
    const oldFlight = oldFlights[0];
    const oldDate = new Date(oldFlight.date);
    const newDate = addMinutes(oldDate, delay);

    const newFlight = { ...oldFlight, date: newDate.toISOString() };

    return [newFlight, ...flights.slice(1)];
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }
}
