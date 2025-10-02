import { Component, inject, linkedSignal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { DateCvaDirective } from '@demo/shared/ui-common';
import { FlightDetailStore } from '../flight-detail.store';
import { Control, form, required, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, DateCvaDirective, Control, JsonPipe],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  private route = inject(ActivatedRoute);

  private store = inject(FlightDetailStore);
  flight = linkedSignal(() => this.store.flightValue());

  error = this.store.saveFlightError;
  isPending = this.store.saveFlightIsPending;

  // TODO: Add some validators
  flightForm = form(this.flight, (path) => {
    required(path.from);
    required(path.to);
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id')) ?? 0;
      this.store.updateId(id);
    });
  }

  saveFlight(): void {
    // TODO: use validation details from backend

    submit(this.flightForm, async (flightForm) => {
      const value = flightForm().value();
      const result = await this.store.saveFlight(value);

      if (result.status === 'error') {
        return {
          kind: 'server_error',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          message: 'Server error: ' + (result.error as any).message,
        };
      }
      return null;
    });
  }
}
