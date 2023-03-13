import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Flight, initFlight } from '../../model/flight';
import { ValidationErrorsComponent } from '../../shared/validation-errors/validation-errors.component';
import { CityValidatorDirective } from '../../shared/validation/city-validator.directive';
import { AsyncCityValidatorDirective } from '../../shared/validation/async-city-validator.directive';
import { RoundtripValidatorDirective } from '../../shared/validation/roundtrip-validator.directive';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight-search/flight.service';
import { CanExit } from 'src/app/shared/can-exit';
import { Observable } from 'rxjs';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';

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
export class FlightEditComponent implements OnInit, CanExit {
  private route = inject(ActivatedRoute);
  private dialog = inject(Dialog);

  id = '';
  showDetails = '';
  flight = initFlight;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '';
      this.showDetails = params.get('showDetails') ?? '';
    });

    this.route.data.subscribe((data) => {
      this.flight = data['flight'];
    });
  }

  canExit(): Observable<boolean> {
    const confirm = this.dialog.open(ConfirmComponent, {
      data: 'Do you really want to leave me?',
    });
    return confirm.closed as Observable<boolean>;
  }
}
