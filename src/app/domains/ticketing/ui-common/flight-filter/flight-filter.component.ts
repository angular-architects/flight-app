import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  effect,
  signal,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlightFilter } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css'],
})
export class FlightFilterComponent {
  private fb = inject(FormBuilder);
  #filter = signal<FlightFilter>({ from: '', to: '', urgent: false });
  @Input() set filter(filter: FlightFilter) {
    this.#filter.set(filter);
  }
  @Output() searchTrigger = new EventEmitter<FlightFilter>();

  filterForm = this.fb.nonNullable.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    urgent: [false],
  });

  constructor() {
    effect(() => this.filterForm.setValue(this.#filter()));
  }

  search(): void {
    this.searchTrigger.next(this.filterForm.getRawValue());
  }
}
