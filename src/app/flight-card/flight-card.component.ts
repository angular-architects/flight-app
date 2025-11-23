import { ChangeDetectionStrategy, Component, inject, input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { CityPipe } from '../shared/city.pipe';
import { StatusToggleComponent } from '../status-toggle/status-toggle.component';
import { FlightEditReactiveComponent } from '../flight-edit-reactive/flight-edit-reactive.component';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule, CityPipe, StatusToggleComponent],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent {
  private dialog = inject(MatDialog);

  item = input.required<Flight>();
  selected = model(false);

  ngOnInit() {}

  select() {
    this.selected.set(true);
  }

  deselect() {
    this.selected.set(false);
  }

  edit() {
    this.dialog.open(FlightEditReactiveComponent, {
      data: { flight: { ...this.item } },
    });
  }
}
