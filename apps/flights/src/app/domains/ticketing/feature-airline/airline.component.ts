import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';
import { AirlineStore } from './airline.store';

const airlineNamePattern = /^[A-Za-z ]+$/;

@Component({
  selector: 'app-airline',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <h2>Airlines</h2>

      <form [formGroup]="airlineForm" (ngSubmit)="save()" novalidate>
        <label for="airline-name">Name</label>
        <input
          #nameInput
          id="airline-name"
          type="text"
          formControlName="name"
          [attr.aria-invalid]="name.invalid && (name.dirty || name.touched)"
          [attr.aria-describedby]="
            nameErrorsVisible ? 'airline-name-error' : null
          "
        />

        @if (nameErrorsVisible) {
        <p id="airline-name-error">
          @if (name.hasError('required')) {
          <span>Bitte einen Airline-Namen eingeben.</span>
          } @else if (name.hasError('minlength')) {
          <span>Der Name muss mindestens 2 Zeichen haben.</span>
          } @else if (name.hasError('pattern')) {
          <span>Nur Buchstaben und Leerzeichen sind erlaubt.</span>
          }
        </p>
        }

        <button type="submit">Airline anlegen</button>
      </form>

      @if (store.lastError()) {
      <p role="alert">{{ store.lastError() }}</p>
      } @if (store.lastSuccess()) {
      <p>{{ store.lastSuccess() }}</p>
      }

      <h3>Liste ({{ store.airlinesCount() }})</h3>
      @if (store.airlinesSorted().length === 0) {
      <p>Noch keine Airlines angelegt.</p>
      } @else {
      <ul>
        @for (airline of store.airlinesSorted(); track airline.id) {
        <li>
          <span>{{ airline.name }}</span>
          <button type="button" (click)="remove(airline.id)">Entfernen</button>
        </li>
        }
      </ul>
      }
    </section>
  `,
})
export class AirlineComponent {
  readonly store = inject(AirlineStore);
  readonly #fb = inject(NonNullableFormBuilder);
  protected readonly nameInput =
    viewChild<ElementRef<HTMLInputElement>>('nameInput');

  readonly airlineForm = this.#fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(airlineNamePattern),
      ],
    ],
  });

  get name() {
    return this.airlineForm.controls.name;
  }

  get nameErrorsVisible(): boolean {
    return this.name.invalid && (this.name.dirty || this.name.touched);
  }

  save(): void {
    if (this.airlineForm.invalid) {
      this.airlineForm.markAllAsTouched();
      this.store.clearFeedback();
      return;
    }

    const result = this.store.addAirline(this.name.value);

    if (!result.ok) {
      return;
    }

    this.airlineForm.reset({ name: '' });
    this.nameInput()?.nativeElement.focus();
  }

  remove(id: number): void {
    this.store.removeAirline(id);
  }
}
