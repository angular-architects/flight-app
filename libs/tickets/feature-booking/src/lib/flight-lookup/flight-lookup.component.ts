import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightLookupFacade } from '@flight-demo/tickets/domain';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, Subject, takeUntil, tap } from 'rxjs';
import { LifeCycle } from './life-cycle';

@Component({
  selector: 'tickets-flight-lookup',
  standalone: true,
  hostDirectives: [LifeCycle],
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-lookup.component.html',
  styleUrls: ['./flight-lookup.component.css'],
})
export class FlightLookupComponent implements OnInit {
  facade = inject(FlightLookupFacade);
  lifeCycle = inject(LifeCycle);

  control = new FormControl('', { nonNullable: true });

  // Source
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

    this.online$.pipe(takeUntil(this.lifeCycle.destroy$)).subscribe((v) => {
      console.log('online', v);
    });
  }
}
