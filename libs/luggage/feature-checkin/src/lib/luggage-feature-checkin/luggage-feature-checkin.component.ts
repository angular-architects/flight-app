import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luggage, LuggageService } from '@flight-demo/luggage/domain';

// import { Ticket } from '@flight-demo/checkin/domain';

@Component({
  selector: 'lib-luggage-feature-checkin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luggage-feature-checkin.component.html',
  styleUrl: './luggage-feature-checkin.component.css',
})
export class LuggageFeatureCheckinComponent implements OnInit {
  private luggageService = inject(LuggageService);
  luggage: Luggage[] = [];

  ngOnInit(): void {
    this.luggageService.load().subscribe((luggage) => {
      this.luggage = luggage;
    });
  }
}
