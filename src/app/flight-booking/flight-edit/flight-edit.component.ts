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
export class FlightEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private flightService = inject(FlightService);

  id = '';
  showDetails = '';
  flight = initFlight;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '';
      this.showDetails = params.get('showDetails') ?? '';
      this.load(this.id);
    });
  }

  load(id: string): void {
    this.flightService.findById(id).subscribe((flight) => {
      this.flight = flight;
    });
  }
}
