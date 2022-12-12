import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightLookupFacade } from '@flight-demo/tickets/domain';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'tickets-flight-lookup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-lookup.component.html',
  styleUrls: ['./flight-lookup.component.css'],
})
export class FlightLookupComponent implements OnInit, OnDestroy {
  facade = inject(FlightLookupFacade);

  control = new FormControl('', { nonNullable: true });

  // Source
  private close$ = new Subject<void>();

  from$ = this.control.valueChanges.pipe(
    filter((v) => v.length >= 3),
    debounceTime(300)
  );

  // Sink
  flights$ = this.facade.flights$;
  error$ = this.facade.error$;
  loading$ = this.facade.loading$;
  online$ = this.facade.online$;

  ngOnInit(): void {
    this.from$.subscribe((value) => {
      this.facade.lookup(value);
    });

    this.online$.pipe(takeUntil(this.close$)).subscribe((v) => {
      console.log('online', v);
    });
  }

  ngOnDestroy(): void {
    this.close$.next();
  }
}
