import { Component, Input } from '@angular/core';

import { initialLuggage } from '../../data';

@Component({
  selector: 'app-luggage-card',
  standalone: true,
  imports: [],
  templateUrl: './luggage-card.component.html',
  styleUrls: ['./luggage-card.component.css'],
})
export class LuggageCardComponent {
  @Input() luggageItem = initialLuggage;
}
