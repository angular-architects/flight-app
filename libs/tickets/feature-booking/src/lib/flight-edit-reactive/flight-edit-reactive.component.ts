import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  validateCity,
  validateRoundTrip,
  ValidationErrorsComponent,
} from '@flight-demo/shared/util-validation';
import { ticketsActions, ticketsFeature } from '@flight-demo/tickets/domain';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  templateUrl: './flight-edit-reactive.component.html',
  styleUrls: ['./flight-edit-reactive.component.css'],
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorsComponent],
})
export class FlightEditReactiveComponent implements OnInit {
  private store = inject(Store);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private flight$ = this.store.select(ticketsFeature.selectFlightToEdit);

  loaded$ = this.flight$.pipe(map((f) => f.id !== 0));

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
      const id = paramMap.get('id');
      if (id) {
        this.store.dispatch(ticketsActions.loadFlightById({ id }));
      }
    });

    this.flight$.subscribe((flight) => {
      this.form.patchValue(flight);
    });
  }

  save(): void {
    const flight = this.form.getRawValue();
    this.store.dispatch(ticketsActions.saveFlight({ flight }));
  }
}
