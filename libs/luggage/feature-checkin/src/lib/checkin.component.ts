import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinFacade } from '@flight-demo/luggage/domain';
import { LuggageCardComponent } from '@flight-demo/luggage/ui-common';

// import { FlightService } from '@flight-demo/tickets/domain';

@Component({
  standalone: true,
  imports: [CommonModule, LuggageCardComponent],
  selector: 'luggage-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  luggageList$ = this.checkinFacade.luggageList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
