import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerService } from 'src/app/data/passenger.service';
import { Passenger } from 'src/app/model/passenger';
import { FormsModule } from '@angular/forms';
import { PassengerCardComponent } from '../passenger-card/passenger-card.component';

@Component({
  selector: 'app-passenger-search',
  standalone: true,
  imports: [CommonModule, FormsModule, PassengerCardComponent],
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
})
export class PassengerSearchComponent {
  private passengerService = inject(PassengerService);

  name = signal('');
  firstName = signal('');

  // TODO: Don't trigger this on filter change
  passengersResource = this.passengerService.findByName(
    this.name,
    this.firstName,
  );

  passengers = this.passengersResource.value;
  error = this.passengersResource.error;
  isLoading = this.passengersResource.isLoading;

  load(): void {
    this.passengersResource.reload();
  }

}
