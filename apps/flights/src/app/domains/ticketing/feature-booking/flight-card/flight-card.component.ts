import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CityPipe, StatusToggleComponent } from '@demo/shared/ui-common';
import { initFlight } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CityPipe, DatePipe, StatusToggleComponent, RouterLink],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  @Input() item = initFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelection() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
