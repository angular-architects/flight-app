import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../flight-booking/flight-search/flight.service';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  combineLatest,
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  exhaustMap,
  filter,
  interval,
  map,
  mergeMap,
  of,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Flight } from '../model/flight';
import { ta } from 'date-fns/locale';

@Component({
  selector: 'app-flight-typeahead',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css'],
})
export class FlightTypeaheadComponent implements OnDestroy {
  flightService = inject(FlightService);

  loading = false;
  control = new FormControl();

  loading$ = new BehaviorSubject<boolean>(false);

  // online = false;

  online$ = interval(2000).pipe(
    startWith(-1),
    tap((counter) => console.log('counter', counter)),
    map((_) => Math.random() < 0.5), // t, t, t, f, f, t
    map(() => true),
    distinctUntilChanged(), // t, f, t
    shareReplay({ bufferSize: 1, refCount: true })
    // TODO: Get rid of tap!!
    //tap((value) => (this.online = value))
  );

  input$ = this.control.valueChanges.pipe(
    filter((v) => v.length >= 3),
    debounceTime(300)
  );

  flights$ = combineLatest({ input: this.input$, online: this.online$ }).pipe(
    filter((combi) => combi.online),

    // TODO: Think about this side-effect
    tap(() => (this.loading = true)),
    switchMap((combi) => this.load(combi.input)),
    tap(() => (this.loading = false))
  );

  close$ = new Subject<void>();

  constructor() {
    this.online$
      .pipe(takeUntil(this.close$))
      .subscribe((o) => console.log('online'));
  }
  ngOnDestroy(): void {
    this.close$.next();
  }

  // flights$ = this.input$.pipe(
  //   withLatestFrom(this.online$),
  //   filter(([input, online]) => online),

  //   // TODO: Think about this side-effect
  //   tap(() => (this.loading$.next(true))),
  //   switchMap(([input, online]) => this.load(input)),
  //   tap(() => (this.loading$.next(true)))
  // );

  // flights$ = this.control.valueChanges.pipe(
  //   filter((v) => v.length >= 3),
  //   debounceTime(300),
  //   tap(() => (this.loading = true)),
  //   switchMap((input) => this.load(input)),
  //   tap(() => (this.loading = false))
  // );

  load(airport: string): Observable<Flight[]> {
    return this.flightService.find(airport, '').pipe(
      // delay(7000)
      catchError((err) => {
        console.log('err', err);
        return of([]);
      })
    );
  }
}
