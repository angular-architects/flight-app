import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LuggageCardComponent } from '@demo/luggage/ui-common';
import { LuggageStore } from './luggage.store';

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [CommonModule, LuggageCardComponent],
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
})
export class CheckinComponent implements OnInit {
  luggageStore = inject(LuggageStore);
  luggage = this.luggageStore.luggage;

  ngOnInit(): void {
    this.luggageStore.load({ passengerId: 17 });
  }
}
