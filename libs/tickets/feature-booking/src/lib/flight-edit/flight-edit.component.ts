import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import {
  CityValidatorDirective,
  RoundtripValidatorDirective,
  ValidationErrorsComponent,
} from '@flight-demo/shared/util-validation';
import { FlightService, initFlight } from '@flight-demo/tickets/domain';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ValidationErrorsComponent,
    CityValidatorDirective,
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
