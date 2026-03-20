import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
  // fligthsCount = inject(FlightStore).flightsCount;
  fligthsCount = signal(0);
}
