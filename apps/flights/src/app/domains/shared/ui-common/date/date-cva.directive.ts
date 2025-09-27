import { Directive, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format, parse } from 'date-fns';

type OnChange = (value: string) => void;
type OnTouched = () => void;

@Directive({
  selector: 'input[appDateCva]',
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
  _onChange: OnChange = () => {
    null;
  };
  _onTouched: OnTouched = () => {
    null;
  };

  @HostBinding('value')
  value = '';

  @HostListener('change', ['$event'])
  change(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    const value = input?.value ?? '';
    const date = value
      ? parse(value, 'dd.MM.yyyy HH:mm', new Date())
      : new Date();
    this._onChange(date.toISOString());
  }

  @HostListener('blur')
  blur(): void {
    this._onTouched();
  }

  writeValue(dateISO: string): void {
    const date = new Date(dateISO);
    const formatted = date ? format(date, 'dd.MM.yyyy HH:mm') : '';
    this.value = formatted;
  }
  registerOnChange(fn: OnChange): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: OnTouched): void {
    this._onTouched = fn;
  }
}
