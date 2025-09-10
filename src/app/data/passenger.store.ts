import { inject, Injectable, signal } from '@angular/core';
import { PassengerService } from './passenger.service';

@Injectable({ providedIn: 'root' })
export class PassengerStore {
  private passengerService = inject(PassengerService);

  name = signal('');
  firstName = signal('');

  passengersResource = this.passengerService.findByName(
    this.name,
    this.firstName,
  );

  passengers = this.passengersResource.value;
  error = this.passengersResource.error;
  isLoading = this.passengersResource.isLoading;

  reload(): void {
    this.passengersResource.reload();
  }
}

