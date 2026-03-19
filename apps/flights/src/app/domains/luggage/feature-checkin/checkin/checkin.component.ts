import { Component, OnInit, inject } from '@angular/core';

import { Luggage, LuggageService } from '@demo/luggage/data';
import { LuggageCardComponent } from '@demo/luggage/ui-common';

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [LuggageCardComponent],
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
})
export class CheckinComponent implements OnInit {
  luggageService = inject(LuggageService);
  luggage: Luggage[] = [];

  ngOnInit(): void {
    this.luggageService.load().subscribe((luggage) => {
      this.luggage = luggage;
    });
  }
}
