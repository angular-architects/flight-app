import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@demo/shared/ui-common';
import {
  Flight,
  FlightBookingFacade,
  FlightService,
} from '@demo/ticketing/data';
import { addMinutes } from '@demo/shared/util-common';
import {
  toSignal,
  toObservable,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, filter, interval, startWith } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent implements OnInit {
  private facade = inject(FlightBookingFacade);

  from = signal('Paris');
  to = signal('London');

  from$ = toObservable(this.from);
  to$ = toObservable(this.to);

  criteria$ = combineLatest({
    from: this.from$,
    to: this.to$,
    counter: interval(1000),
  }).pipe(
    filter((combi) => combi.from.length >= 3 && combi.to.length >= 3),
    debounceTime(300)
    // startWith({ from: '', to: ''} as {from:string, to:string})
  );

  criteria = toSignal(this.criteria$, {
    initialValue: {
      from: '',
      to: '',
      counter: -1,
    },
  });

  // criteria2 = toSignal(this.criteria$, {
  //   requireSync: true
  // });

  flightRoute = computed(() => this.from() + ' to ' + this.to());

  flights = this.facade.flights;
  selectedFlight = signal<Flight | undefined>(undefined);

  message = signal('');

  date = signal(new Date());

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  injector = inject(Injector);

  private flightService = inject(FlightService);

  constructor() {
    this.criteria$.pipe(takeUntilDestroyed()).subscribe((c) => {
      console.log('counter$', c.counter);
    });

    effect(() => {
      console.log('counter', this.criteria().counter);
    });

    effect(() => {
      console.log('from', this.from());
      console.log(
        'to',
        untracked(() => this.to())
      );
    });

    setTimeout(() => {
      this.from.set('Graz');
      // Graz - London  // Glitch
      this.to.set('Hamburg');
      // Graz - Hamburg
    }, 2000);

    effect(
      () => {
        // console.log('from', this.from());
        // console.log('to', untracked(() => this.to()));
        this.search();
      },
      { allowSignalWrites: true }
    );

    // effect(() => {
    //   this.to.set(this.from())
    // }, { allowSignalWrites: true });
  }

  ngOnInit() {
    effect(
      () => {
        console.log('from', this.from());
        console.log('to', () => this.to());
      },
      { injector: this.injector }
    );
  }

  search(): void {
    const { from, to } = this.criteria();

    // Reset properties
    this.message.set('');
    this.selectedFlight.set(undefined);

    this.facade.load(from, to);
  }

  select(f: Flight): void {
    this.selectedFlight.set(f);
  }

  updateBasket(fid: number, selected: boolean): void {
    // const basket = this.basket();
    // basket[fid] = selected;
    // this.basket.set(basket);

    // this.basket.mutate(basket => {
    //   basket[fid] = selected;
    // });

    console.log('basket', fid, selected);
    // Immutables
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  delay(): void {
    // this.flights.mutate(flights => {
    //   flights[0].date = addMinutes(flights[0].date, 15);
    // });

    this.facade.delay();
  }
}
