import { httpResource } from '@angular/common/http';
import { Component, effect, inject, input, numberAttribute, untracked } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Flight, FlightService, initFlight } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  private flightService = inject(FlightService);
  protected editForm = inject(NonNullableFormBuilder).group({
    id: [0],
    from: [''],
    to: [''],
    date: [new Date().toISOString()],
    delayed: [false],
  });

  id = input(0, { transform: numberAttribute });
  flightResource = httpResource<Flight>(() => ({
    url: 'https://demo.angulararchitects.io/api/flight',
    params: { id: this.id() }
  }), { defaultValue: initFlight });

  constructor() {
    effect(() => untracked(() => console.log(this.id())));
    effect(() => {
      if (this.flightResource.hasValue()) {
        this.editForm.patchValue(this.flightResource.value())
      }
    });
  }

  save(): void {
    console.log(this.editForm.value);
  }
}
