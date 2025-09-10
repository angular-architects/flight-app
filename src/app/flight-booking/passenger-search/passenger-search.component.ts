import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassengerCardComponent } from '../passenger-card/passenger-card.component';
import { PassengerStore } from 'src/app/data/passenger.store';

@Component({
  selector: 'app-passenger-search',
  standalone: true,
  imports: [CommonModule, FormsModule, PassengerCardComponent],
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
})
export class PassengerSearchComponent {
  private store = inject(PassengerStore);

  name = this.store.name;
  firstName = this.store.firstName;

  passengers = this.store.passengers;
  error = this.store.error;
  isLoading = this.store.isLoading;

  load(): void {
    this.store.reload();
  }
}
