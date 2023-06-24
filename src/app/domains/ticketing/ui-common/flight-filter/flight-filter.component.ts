import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  effect,
  signal,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FlightFilter } from '@demo/ticketing/data';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, map, tap } from 'rxjs';

export interface LocalState {
  filters: FlightFilter[];
}

export const initialLocalState: LocalState = {
  filters: [],
};

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css'],
  providers: [ComponentStore],
})
export class FlightFilterComponent {
  private fb = inject(FormBuilder);
  private localStore = inject(ComponentStore<LocalState>);
  #filter = signal<FlightFilter>({ from: '', to: '', urgent: false });
  @Input() set filter(filter: FlightFilter) {
    this.#filter.set(filter);
  }
  @Output() searchTrigger = new EventEmitter<FlightFilter>();

  filterForm = this.fb.nonNullable.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    urgent: [false],
  });

  selectedFilter = new FormControl(this.filterForm.getRawValue(), {
    nonNullable: true,
  });

  /**
   * Updater
   */

  addFilter = this.localStore.updater(
    (state: LocalState, filter: FlightFilter) => ({
      ...state,
      filters: [...state.filters, filter],
    })
  );

  /**
   * Selectors
   */

  selectFilters = this.localStore.selectSignal(
    // Selectors

    // Projector
    (state) => state.filters
  );

  /**
   * Effects
   */

  triggerSearch = this.localStore.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      map(() => this.filterForm.getRawValue()),
      tap((filter: FlightFilter) => {
        this.addFilter(filter);
        this.searchTrigger.next(filter);
      })
    )
  );

  constructor() {
    effect(() => this.filterForm.setValue(this.#filter()));
    this.localStore.setState(initialLocalState);
  }
}
