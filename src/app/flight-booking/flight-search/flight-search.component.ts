import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { DateCvaDirective } from 'src/app/shared/date/date-cva.directive';
import { DateStepperComponent } from 'src/app/shared/date/date-stepper/date-stepper.component';

import {
  toObservable,
  toSignal,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, filter, interval } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    CityPipe,
    FlightCardComponent,
    DateCvaDirective,
    DateStepperComponent,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  from = signal('London');
  to = signal('Paris');
  flights = signal<Array<Flight>>([]);
  message = signal('');

  from$ = toObservable(this.from);
  to$ = toObservable(this.to);

  criteria$ = combineLatest({
    from: this.from$,
    to: this.to$,
    dummy: interval(1000),
  }).pipe(
    filter((combi) => combi.from.length >= 3 && combi.to.length >= 3),
    debounceTime(300)
  );

  criteria = toSignal(this.criteria$, {
    initialValue: {
      from: '',
      to: '',
      dummy: -1,
    },
  });

  // flightRoute = computed(() => this.from() + ' to ' + untracked(() => this.to()));
  flightRoute = computed(() => this.from() + ' to ' + this.to());

  constructor() {
    effect(() => {
      console.log('counter', this.criteria().dummy);
    });

    this.criteria$.pipe(takeUntilDestroyed()).subscribe((c) => {
      console.log('counter$', c.dummy);
    });

    // effect(() => {
    //   this.to.set(this.from());
    // }, { allowSignalWrites: true });

    effect(
      () => {
        // console.log('route', this.from());
        // console.log('route', this.to());
        this.search();
      },
      { allowSignalWrites: true }
    );

    // setTimeout(() => {
    //   this.from.set('Frankfurt');
    //   this.from.set('Frankfurt1234');
    //   this.from.set('Frankfurt');
    //   // Glitch bei RxJS: Frankfurt - Paris
    //   this.to.set('Hamburg');
    // }, 2000);
  }

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  private flightService = inject(FlightService);

  search(): void {
    // Reset properties
    this.message.set('');

    const { from, to } = this.criteria();

    this.flightService.find(from, to).subscribe({
      next: (flights) => {
        this.flights.set(flights);
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }
}
