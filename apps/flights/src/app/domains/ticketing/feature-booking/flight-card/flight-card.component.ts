import { DatePipe } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CityPipe, StatusToggleComponent } from '@demo/shared/ui-common';
import { Flight } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CityPipe, DatePipe, StatusToggleComponent, RouterLink],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  readonly item = input.required<Flight>();
  readonly selected = model(false);
  // selectedChange = output<boolean>();

  toggleSelection() {
    this.selected.update(curr => !curr);
    // this.selectedChange.emit(this.selected());
  }
}
