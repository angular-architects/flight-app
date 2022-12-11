import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initLuggage } from '@flight-demo/luggage/domain';

@Component({
  selector: 'flight-demo-luggage-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luggage-ui-card.component.html',
  styleUrls: ['./luggage-ui-card.component.css'],
})
export class LuggageUiCardComponent {
  @Input() luggage = initLuggage;
}
