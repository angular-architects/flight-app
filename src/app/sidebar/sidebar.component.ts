import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
  imports: [RouterLink, RouterLinkActive],
})
export class SidebarComponent {}
