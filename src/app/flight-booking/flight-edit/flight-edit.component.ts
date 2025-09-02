import {
  Component,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  signal,
} from '@angular/core';

import { FlightDetailStore } from '../flight-detail.store';
import { Control, form, minLength, required } from '@angular/forms/signals';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { debounceSignal } from '../../shared/debounce-signal';

@Component({
  selector: 'app-flight-edit',
  imports: [
    Control,
    MatDatepickerModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  private store = inject(FlightDetailStore);

  id = input.required({
    transform: numberAttribute,
  });

  // TODO: Get from store
  isPending = debounceSignal(this.store.saveFlightIsPending, 300);
  error = this.store.saveFlightError;

  flight = linkedSignal(() => this.store.flightValue());
  flightForm = form(this.flight);

  constructor() {
    this.store.updateFilter(this.id);
  }

  save(): void {
    this.store.saveFlight(this.flightForm().value());
  }
}
