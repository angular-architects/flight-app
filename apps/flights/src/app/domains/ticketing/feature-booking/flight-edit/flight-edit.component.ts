import { httpResource } from '@angular/common/http';
import { Component, input, numberAttribute, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Control, form } from '@angular/forms/signals';
import { Flight, initFlight } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-edit',
  imports: [
    ReactiveFormsModule,
    // (3) UI Control: Template Binding
    Control,
  ],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  // (1) Data Model: Writable Signal
  /*  flight = signal({
    ...initFlight,
    from: 'Rome'
  }); */

  id = input(0, { transform: numberAttribute });
  // (1) Data Model: Writable Signal
  flightResource = httpResource<Flight>(
    () => ({
      url: 'https://demo.angulararchitects.io/api/flight',
      params: { id: this.id() },
    }),
    { defaultValue: initFlight }
  );

  // (2) Field State: value, valid, touched, dirty, ...
  editForm = form(this.flightResource.value);

  constructor() {
    /* effect(() => {
      if (this.flightResource.hasValue()) {
        this.editForm.patchValue(this.flightResource.value());
      }
    }); */
  }

  save(): void {
    console.log(this.editForm().value());
  }
}
