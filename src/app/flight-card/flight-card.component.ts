import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  model,
  OnInit,
  Output,
  output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Flight, initFlight } from '../model/flight';
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
export class FlightCardComponent implements OnInit {
  private dialog = inject(MatDialog);

  // item = input.required<Flight>();
  // selected = model(false);
  // selectedChange = output<boolean>();

  @Input() item = initFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    // this.selectedChange.emit(true);
  }
  ngOnInit() {
    this.selectedChange.emit(true);
  }

  select() {
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selectedChange.emit(false);
  }

  edit() {
    // this.dialog.open(FlightEditReactiveComponent, {
    //   data: { flight: { ...this.item } },
    // });
  }
}
