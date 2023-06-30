import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  validateCity,
  validateRoundTrip,
  ValidationErrorsComponent,
} from '@flight-demo/shared/util-validation';

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  templateUrl: './flight-edit-reactive.component.html',
  styleUrls: ['./flight-edit-reactive.component.css'],
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorsComponent],
})
export class FlightEditReactiveComponent {
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
    ],
    to: [''],
    date: [''],
    delayed: [false],
  });

  constructor() {
    this.form.addValidators(validateRoundTrip);

    this.form.valueChanges.subscribe((flightForm) => {
      console.log('flight form changed:', flightForm);
    });

    this.form.controls.from.valueChanges.subscribe((from) => {
      console.log('from changed:', from);
    });
  }

  save(): void {
    const flight = this.form.value;
    console.log('flight to save:', flight);
  }
}
