import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  flight: Flight = {
    id: 1,
    date: new Date().toISOString(),
    from: 'Paris',
    to: 'London',
    delayed: true,
  };
}
