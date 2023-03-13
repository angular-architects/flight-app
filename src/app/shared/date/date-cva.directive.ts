import { Directive, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format, parse } from 'date-fns';

type OnChange = (value: string) => void;
type OnTouched = () => void;

@Directive({
  selector: '[appDateCva]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateCvaDirective,
      multi: true,
    },
  ],
})
export class DateCvaDirective implements ControlValueAccessor {
  _onChange: OnChange = () => {};
  _onTouched: OnTouched = () => {};

  @HostBinding('value')
  value = '';

  @HostListener('change', ['$event.target.value'])
  change(value: string): void {
    console.log('change', value);

    if (value) {
      value = parse(value, 'dd.MM.yyyy HH:mm', 0).toISOString();
    }
    this._onChange(value);
  }

  @HostListener('blur')
  blur(): void {
    this._onTouched();
  }

  writeValue(date: Date): void {
    console.log('date', date);

    const formatted = date ? format(date, 'dd.MM.yyyy HH:mm') : '';
    console.log('formatted', formatted);
    this.value = formatted;
  }
  registerOnChange(fn: OnChange): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched;
  }
}
