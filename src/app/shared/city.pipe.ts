import { inject, Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from './config.service';

export type CityFormat = 'long' | 'short';

@Pipe({
  name: 'city',
  standalone: true,
  pure: true,
})
export class CityPipe implements PipeTransform {
  private configService = inject(ConfigService);

  transform(value: string, fmt?: CityFormat): string {
    let short, long, icao;

    switch (value) {
      case 'Paris':
        short = 'CDG';
        icao = 'LFPG';
        long = 'Charles de Gaulle Airport';
        break;
      case 'London':
        short = 'LCY';
        icao = 'EGLC';
        long = 'London City Airport';
        break;
      case 'Berlin':
        short = 'BER';
        icao = 'EDDB';
        long = 'Flughafen Berlin Brandenburg - Willy Brandt';
        break;
      default:
        short = icao = long = value;
    }

    if (fmt === 'short' && this.configService.config.ICAO) {
      return icao;
    } else if (fmt === 'short') {
      return short;
    }

    return long;
  }
}
