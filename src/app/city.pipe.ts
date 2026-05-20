import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'city' })
export class CityPipe implements PipeTransform {
  transform(value: unknown, format: 'short' | 'long' = 'short') {
    if (value === 'Wien') {
      return format ==='short' ? 'VIE' : 'Schwechat';
    } else if (value === 'Berlin') {
      return format === 'short' ? 'BER' : 'Schönfeld';
    } else {
      return value;
    }
  }
}

function foobar(value: unknown) {
  if (typeof value === 'string') {
    value.toUpperCase();
  }

  if (value instanceof Date) {
    value.getTime();
  }

  if (typeof value === 'object' && value !== null && 'somethingElse' in value) {
    if (typeof value.somethingElse === 'function') {
      value.somethingElse();
    }
  }
}
