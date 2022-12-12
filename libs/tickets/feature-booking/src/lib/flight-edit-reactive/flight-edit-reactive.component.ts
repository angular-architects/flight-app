import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  validateRoundTrip,
  ValidationErrorsComponent,
} from '@flight-demo/shared/util-validation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  templateUrl: './flight-edit-reactive.component.html',
  styleUrls: ['./flight-edit-reactive.component.css'],
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorsComponent],
})
export class FlightEditReactiveComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    id: [0],
    from: ['', [Validators.required, Validators.minLength(3)]],
    to: [''],
    date: [''],
    delayed: [false],
  });

  constructor() {
    this.form.addValidators(validateRoundTrip);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = parseInt(paramMap.get('id') || '0');
      this.form.patchValue({ id, from: 'here', to: 'there' });
    });
  }

  save(): void {
    const flight = this.form.getRawValue();
    console.log('flight', flight);
  }
}
