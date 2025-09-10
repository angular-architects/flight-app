import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Passenger } from 'src/app/model/passenger';

@Component({
  selector: 'app-passenger-card',
  imports: [RouterLink],
  templateUrl: './passenger-card.component.html',
  styleUrl: './passenger-card.component.css'
})
export class PassengerCardComponent {
  passenger = input.required<Passenger>();
}
