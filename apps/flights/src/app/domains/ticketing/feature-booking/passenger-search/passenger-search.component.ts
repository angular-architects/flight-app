import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUpdateDirective } from '@demo/shared/util-common';
import { PassengerStore } from '../passenger.store';
import { PassengerFilter } from '@demo/ticketing/data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passenger-search',
  standalone: true,
  imports: [CommonModule, FormsModule, FormUpdateDirective],
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
})
export class PassengerSearchComponent {
  store = inject(PassengerStore);

  firstName = this.store.passengerFilter.firstName;
  name = this.store.passengerFilter.name;
  passengers = this.store.passengerEntities;

  updateFilter(filter: PassengerFilter): void {
    console.log('filter', filter);
    this.store.updatePassengerFilter(filter);
  }

  search(): void {
    this.store.loadPassengerEntities();
  }

  undo(): void {
    this.store.undo();
  }

  redo(): void {
    this.store.redo();
  }
}
