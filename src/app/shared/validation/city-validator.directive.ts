import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[city]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true,
    },
  ],
})
export class CityValidatorDirective implements Validator {
  validate(c: AbstractControl): ValidationErrors | null {
    const validCities: string[] = ['London', 'Paris'];
    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities,
        },
      };
    }
    return null;
  }
}
