import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Flight } from '../../model/flight';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validateCity } from '../../shared/validation/city-validator';
import { FlightService } from '../flight-search/flight.service';
import { validateAsyncCity } from '../../shared/validation/async-city-validator';
import { ValidationErrorsComponent } from '../../shared/validation-errors/validation-errors.component';
import { validateRoundTrip } from '../../shared/validation/roundtrip-validator';

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  templateUrl: './flight-edit-reactive.component.html',
  styleUrls: ['./flight-edit-reactive.component.css'],
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorsComponent],
})
export class FlightEditReactiveComponent {
  private flightService = inject(FlightService);

  private dialogRef = inject(MatDialogRef);
  private data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);
  flight = this.data.flight;

  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    id: [0],
    from: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        validateCity(['London', 'Paris', 'Berlin']),
      ],
      [validateAsyncCity(this.flightService)],
    ],
    to: [''],
    date: [''],
    delayed: [false],
  });

  constructor() {
    this.form.addValidators(validateRoundTrip);

    this.form.patchValue(this.flight);

    this.form.valueChanges.subscribe((flightForm) => {
      console.log('flight form changed:', flightForm);
    });

    this.form.controls.from.valueChanges.subscribe((from) => {
      console.log('from changed:', from);
    });
  }

  save(): void {
    this.flight = this.form.getRawValue();
    console.log('flight', this.flight);
  }

  close(): void {
    this.dialogRef.close();
  }
}
