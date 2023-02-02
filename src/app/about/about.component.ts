import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../shared/controls/tab/tab.component';
import { TabbedPaneComponent } from '../shared/controls/tabbed-pane/tabbed-pane.component';
import { ClickWithWarningDirective } from '../shared/controls/click-with-warning.directive';
import { TooltipDirective } from '../shared/tooltip.directive';
import { Flight } from '../model/flight';
import { DataTableComponent } from '../shared/controls/data-table/data-table.component';
import { TableFieldDirective } from '../shared/controls/data-table/table-field.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [
    CommonModule,
    TabComponent,
    TabbedPaneComponent,
    ClickWithWarningDirective,
    TooltipDirective,
    DataTableComponent,
    TableFieldDirective,
  ],
})
export class AboutComponent {
  flights: Flight[] = [
    {
      id: 1,
      from: 'Hamburg',
      to: 'Berlin',
      date: '2025-02-01T17:00+01:00',
      delayed: false,
    },
    {
      id: 2,
      from: 'Hamburg',
      to: 'Frankfurt',
      date: '2025-02-01T17:30+01:00',
      delayed: false,
    },
    {
      id: 3,
      from: 'Hamburg',
      to: 'Mallorca',
      date: '2025-02-01T17:45+01:00',
      delayed: false,
    },
  ];

  deleteAll(): void {
    console.debug('delete ...');
  }
}
