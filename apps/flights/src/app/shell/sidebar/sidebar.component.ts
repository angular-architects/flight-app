import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlightStore } from '@demo/ticketing/feature-booking';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
  fligthsCount = inject(FlightStore).flightsCount;
}
