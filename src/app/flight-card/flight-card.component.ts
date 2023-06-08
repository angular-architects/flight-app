import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { initFlight } from '../model/flight';
import { CityPipe } from '../shared/city.pipe';
import { StatusToggleComponent } from '../status-toggle/status-toggle.component';
import { FlightEditComponent } from '../flight-edit/flight-edit.component';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule, CityPipe, StatusToggleComponent],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  private dialog = inject(MatDialog);

  @Input() item = initFlight;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit() {}

  select() {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }

  edit() {
    this.dialog.open(FlightEditComponent, {
      data: { flight: { ...this.item } },
    });
  }
}
