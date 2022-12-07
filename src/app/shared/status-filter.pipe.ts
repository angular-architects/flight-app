import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../model/flight';

@Pipe({
  name: 'statusFilter',
  standalone: true,
})
export class StatusFilterPipe implements PipeTransform {
  transform(flights: Flight[], onlyDelayed: boolean): Flight[] {
    if (!onlyDelayed) {
      return flights;
    }
    return flights.filter((f) => f.delayed);
  }
}
