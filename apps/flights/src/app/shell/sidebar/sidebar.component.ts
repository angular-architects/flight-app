import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {}
