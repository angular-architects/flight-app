import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  standalone: true,
  pure: true,
})
export class CityPipe implements PipeTransform {
  // srv = inject(Service);

  transform(
    value: string,
    format: string /*, lang: string, nochEiner: string*/,
  ): string {
    console.log('transform!');

    let short, long;

    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Helmut Schmidt';
        break;
      default:
        short = long = value;
    }

    if (format === 'short') {
      return short;
    }

    return long;
  }
}
