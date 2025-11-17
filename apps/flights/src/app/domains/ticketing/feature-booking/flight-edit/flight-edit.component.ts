import { httpResource } from '@angular/common/http';
import { Component, input, numberAttribute, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Control, form } from '@angular/forms/signals';
import { Flight, initFlight } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-edit',
  imports: [
    ReactiveFormsModule,
    // (4) UI Controls: Template Bindings
    Control
  ],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  // (1) Data Model: Writable Signal
  private flight = signal(initFlight);

  // (2) Field State: valid, touched, dirty, disabled, value, ...
  protected editForm = form(this.flight);

  id = input(0, { transform: numberAttribute });
  protected flightResource = httpResource<Flight>(() => ({
    url: 'https://demo.angulararchitects.io/api/flight',
    params: { id: this.id() }
  }), { defaultValue: initFlight });

  constructor() {
    /* effect(() => {
      if (this.flightResource.hasValue()) {
        this.editForm.patchValue(this.flightResource.value())
      }
    }) */

    setTimeout(() => this.flight.set({
      id: 999,
      from: 'Madrid',
      to: 'Rome',
      date: new Date().toISOString(),
      delayed: true
    }), 5_000);
  }

  save(): void {
    // this.flightResource.set(this.editForm.getRawValue());
    console.log(this.editForm().value());
  }
}
