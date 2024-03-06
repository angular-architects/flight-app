import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'flight-booking',
  imports: [RouterOutlet, RouterLink],
  standalone: true,
  template: `
    <a routerLink="./flight-search">Flight Search</a> |
    <a routerLink="./passenger-search">Passenger Search</a>
    <router-outlet></router-outlet>
  `,
})
export class FlightBookingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
