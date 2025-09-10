import { Component, effect, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PassengerService } from 'src/app/data/passenger.service';

@Component({
  selector: 'app-passenger-edit',
  imports: [FormsModule],
  templateUrl: './passenger-edit.component.html',
  styleUrl: './passenger-edit.component.css'
})
export class PassengerEditComponent {

  private passengerService = inject(PassengerService);
  private snackBar = inject(MatSnackBar);

  id = input.required<number>(); 
    // via Router!
    // see main.ts, withComponentInputBinding()

  passengerResource = this.passengerService.findById(this.id);

  passenger = this.passengerResource.value;
  error = this.passengerResource.error;
  isLoading = this.passengerResource.isLoading;

  constructor() {
    effect(() => {
      const error = this.error();
      if (error) {
        this.snackBar.open('Error loading passenger!');
      }
    })
  }

  save(): void {
    this.passengerService.save(this.passenger()).subscribe({
      next: (passenger) => {
        // We don't get a new passenger back
        // this.passengerResource.value.set(passenger);
        this.snackBar.open('Passenger saved!');
      },
      error: (error) => {
        this.snackBar.open('Error saving passenger!');
        console.error('error', error)
      }
    });
  }

}
