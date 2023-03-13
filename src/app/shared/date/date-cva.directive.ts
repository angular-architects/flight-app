import { Directive, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format, parse } from 'date-fns';

type OnChange = (value: Date) => void;
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
    const date = value ? parse(value, 'dd.MM.yyyy HH:mm', 0) : new Date();
    this._onChange(date);
  }

  @HostListener('blur')
  blur(): void {
    this._onTouched();
  }

  writeValue(date: Date): void {
    const formatted = date ? format(date, 'dd.MM.yyyy HH:mm') : '';
    this.value = formatted;
  }
  registerOnChange(fn: OnChange): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched;
  }
}
