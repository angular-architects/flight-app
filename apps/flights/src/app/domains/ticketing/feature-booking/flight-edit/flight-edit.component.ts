import {
  Component,
  effect,
  inject,
  input,
  numberAttribute,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FlightService, initFlight } from '@demo/ticketing/data';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-flight-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  private flightService = inject(FlightService);

  protected editForm = inject(NonNullableFormBuilder).group({
    id: [0],
    from: ['INIT'],
    to: [''],
    date: [new Date().toISOString()],
    delayed: [false],
  });

  id = input(0, { transform: numberAttribute });
  id$ = toObservable(this.id);
  flight$ = this.id$.pipe(switchMap((id) => this.flightService.findById(id)));
  flight = toSignal(this.flight$, {
    // requireSync: true,
    initialValue: initFlight,
  });

  constructor() {
    effect(() => this.editForm.patchValue(this.flight()));
  }

  save(): void {
    console.log(this.editForm.value);
  }
}
