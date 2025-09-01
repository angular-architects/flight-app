import { Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

export function debounceSignal<T>(source: Signal<T>, period = 300): Signal<T> {
  return toSignal(toObservable(source).pipe(debounceTime(period)), {
    initialValue: source(),
  });
}
