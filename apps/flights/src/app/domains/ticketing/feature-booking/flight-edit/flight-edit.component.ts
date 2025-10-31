import { Component, effect, inject, input, numberAttribute } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  private flightService = inject(FlightService);
  protected editForm = inject(NonNullableFormBuilder).group({
    id: [0],
    from: [''],
    to: [''],
    date: [new Date().toISOString()],
    delayed: [false],
  });

  id = input(0, { transform: numberAttribute });
  flightResource = this.flightService.findByIdAsResource(this.id);

  constructor() {
    effect(() => {
      if (this.flightResource.hasValue()) {
        this.editForm.patchValue(this.flightResource.value())
      }
    });
  }

  save(): void {
    console.log(this.editForm.value);
  }
}
