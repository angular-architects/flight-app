import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookingStore } from '@demo/ticketing/feature-booking';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
  bookingStore = inject(BookingStore);
}
