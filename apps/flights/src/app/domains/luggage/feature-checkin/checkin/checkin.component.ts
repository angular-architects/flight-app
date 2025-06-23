import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LuggageCardComponent } from '@demo/luggage/ui-common';
import { LuggageStore } from './luggage.store';
import { Dispatcher } from '@ngrx/signals/events';
import { checkinEvents } from './checkin.events';

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [CommonModule, LuggageCardComponent],
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
})
export class CheckinComponent implements OnInit {
  luggageStore = inject(LuggageStore);
  dispatcher = inject(Dispatcher);
  luggage = this.luggageStore.luggage;

  ngOnInit(): void {
    this.dispatcher.dispatch(
      checkinEvents.loadLuggage({
        passengerId: 17,
      })
    );
  }
}
