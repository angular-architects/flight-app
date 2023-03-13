import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addDays, subDays } from 'date-fns';

@Component({
  selector: 'app-date-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-stepper.component.html',
  styleUrls: ['./date-stepper.component.css'],
})
export class DateStepperComponent {
  @Input() date = new Date();
  @Output() dateChange = new EventEmitter<Date>();

  next(): void {
    this.date = addDays(this.date, 1);
    this.dateChange.emit(this.date);
  }

  prev(): void {
    this.date = subDays(this.date, 1);
    this.dateChange.emit(this.date);
  }
}
