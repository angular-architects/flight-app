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

  /**
   * Updater
   */

  addFilter = this.localStore.updater(
    (state: LocalState, filter: FlightFilter) => ({
      ...state,
      filters: [...state.filters, filter],
    })
  );

  constructor() {
    effect(() => this.filterForm.setValue(this.#filter()));
    this.localStore.setState(initialLocalState);
  }

  search(): void {
    this.addFilter(this.filterForm.getRawValue());
    this.searchTrigger.next(this.filterForm.getRawValue());
  }
}
