import { AbstractControl } from '@angular/forms';

const defaultAllowedCities = ['Vienna', 'Wien', 'Berlin', 'London'];

export function validateCity(allowedCities?: string[]) {
  return (ac: AbstractControl) => {
    const cities = (allowedCities ?? defaultAllowedCities);
    if (cities.includes(ac.value)) {
      return null;
    }

    return { invalidCity: cities };
  };
}
