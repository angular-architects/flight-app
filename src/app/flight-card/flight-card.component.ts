import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  input,
} from '@angular/core';
import { Flight, initFlight } from '../model/flight';
import { CityPipe } from '../shared/city.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css',
  imports: [CityPipe, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent implements OnInit, OnDestroy, OnChanges {
  // @Input() item = initFlight;
  // @Input() selected = false;

  item = input.required<Flight>();
  selected = input.required<boolean>();

  @Output() selectedChange = new EventEmitter<boolean>();

  blink = injectCdBlink();

  constructor() {
    console.log('ctr', this.item, this.selected);
  }

  ngOnInit(): void {
    // setTimeout(() => this.selectedChange.emit(true), 0);

    console.log('init', this.item, this.selected);
  }
  ngOnDestroy(): void {
    console.log('destory', this.item, this.selected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', this.item, this.selected);
    console.log('\tchanges', changes);
  }

  select(): void {
    //this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect(): void {
    //this.selected = false;
    this.selectedChange.emit(false);
  }
}

import { ElementRef, NgZone, inject } from '@angular/core';

export function injectCdBlink(): () => null {
  const element = inject(ElementRef);
  const zone = inject(NgZone);
  let active = false;

  const blink = () => {
    // Dirty Hack used to visualize the change detector

    const selectedColor =
      element.nativeElement.firstChild.style.backgroundColor;
    const visualizerColor = 'crimson';

    !active &&
      zone.runOutsideAngular(() => {
        active = true;
        setTimeout(() => {
          element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        });
        setTimeout(() => {
          element.nativeElement.firstChild.style.backgroundColor =
            selectedColor;
          active = false;
        }, 500);
      });

    return null;
  };

  return blink;
}
