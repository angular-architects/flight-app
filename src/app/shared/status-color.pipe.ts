import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
  standalone: true,
})
export class StatusColorPipe implements PipeTransform {
  transform(delayed: boolean): string {
    if (delayed) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
