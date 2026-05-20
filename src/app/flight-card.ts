import { DatePipe, NgStyle } from '@angular/common';
import { Component, computed, input, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Flight } from './model/flight';

@Component({
  selector: 'flight-card',
  imports: [NgStyle, DatePipe, RouterLink],
  template: `
    @let item = this.item();
    <div style="padding:20px;" [ngStyle]="divStyle()">
      <h2>{{ item.from }} - {{ item.to }}</h2>
      <p>Flugnr. #{{ item.id }}</p>
      <p>Datum: {{ item.date | date: 'dd.MM.yyyy' }}</p>
      <p>
        <button (click)="onSelect(true)">Select</button>
        <button (click)="onSelect(false)">Deselect</button>
        <a [routerLink]="['/flight-edit', item.id]">Edit</a>
      </p>
    </div>
  `,
})
export class FlightCard {
  // @Input({required: true}) item: Flight | undefined;

  item = input.required<Flight>();
  selected = model.required<boolean>();

  constructor() {
    console.log('initialized');
  }

  divStyle = computed(() => ({
    'background-color': this.selected() ? 'orange' : 'blue',
  }));

  onSelect(selected: boolean) {
    this.selected.set(selected);
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
