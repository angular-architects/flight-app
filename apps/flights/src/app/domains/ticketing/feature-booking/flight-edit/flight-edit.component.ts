import { httpResource } from '@angular/common/http';
import { Component, input, numberAttribute, signal } from '@angular/core';
import { Control, form } from '@angular/forms/signals';
import { Flight, initFlight } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-edit',
  imports: [Control],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  id = input(0, { transform: numberAttribute });
  flightResource = httpResource<Flight>(() => ({
    url: 'https://demo.angulararchitects.io/api/flight',
    params: { id: this.id()}
  }), { defaultValue: initFlight });
  // flight = signal(initFlight);

  editForm = form(this.flightResource.value);


  save(): void {
    console.log(this.flightResource.value());
  }
}
