import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
  imports: [RouterLink],
})
export class SidebarComponent {
  flightsCount = signal(0);
}
