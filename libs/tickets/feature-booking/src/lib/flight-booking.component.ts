import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'tickets-flight-booking',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './flight-booking.component.html',
})
export class FlightBookingComponent {}
