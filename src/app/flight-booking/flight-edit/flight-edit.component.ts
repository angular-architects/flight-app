import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Flight, initFlight } from '../../model/flight';
import { ValidationErrorsComponent } from '../../shared/validation-errors/validation-errors.component';
import { CityValidatorDirective } from '../../shared/validation/city-validator.directive';
import { AsyncCityValidatorDirective } from '../../shared/validation/async-city-validator.directive';
import { RoundtripValidatorDirective } from '../../shared/validation/roundtrip-validator.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ValidationErrorsComponent,
    CityValidatorDirective,
    AsyncCityValidatorDirective,
    RoundtripValidatorDirective,
  ],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  // dialogRef = inject(MatDialogRef);
  // data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);

  route = inject(ActivatedRoute);

  id = '';
  showDetails = 'false';
  flight = initFlight;

  /* 
    Alternative: 
    type FlightData = { flight: Flight };
    data = inject<FlightData>(MAT_DIALOG_DATA);
  */

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '';
      this.showDetails = params.get('showDetails') || 'false';
    });
  }

  // close(): void {
  //   this.dialogRef.close();
  // }
}
