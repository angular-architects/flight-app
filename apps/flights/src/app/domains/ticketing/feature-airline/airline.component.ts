import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  FormField,
  FormRoot,
  form,
  minLength,
  pattern,
  required,
} from '@angular/forms/signals';
import { AirlineStore } from './airline.store';

const airlineNamePattern = /^[A-Za-z ]+$/;

type AirlineFormModel = {
  readonly name: string;
  readonly iataCode: string;
  readonly country: string;
  readonly alliance: string;
  readonly foundedYear: number | null;
  readonly website: string;
};

const initAirlineFormModel: AirlineFormModel = {
  name: '',
  iataCode: '',
  country: '',
  alliance: '',
  foundedYear: null,
  website: '',
};

@Component({
  selector: 'app-airline',
  imports: [CommonModule, FormField, FormRoot],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <h2>Airlines</h2>

      <form [formRoot]="airlineForm" novalidate>
        <label for="airline-name">Name</label>
        <input
          #nameInput
          id="airline-name"
          type="text"
          [formField]="airlineForm.name"
          [attr.aria-invalid]="
            airlineForm.name().invalid() &&
            (airlineForm.name().dirty() || airlineForm.name().touched())
          "
          [attr.aria-describedby]="
            airlineForm.name().invalid() &&
            (airlineForm.name().dirty() || airlineForm.name().touched())
              ? 'airline-name-error'
              : null
          "
        />

        @if ( airlineForm.name().invalid() && (airlineForm.name().dirty() ||
        airlineForm.name().touched()) ) {
        <div id="airline-name-error">
          @for (error of airlineForm.name().errors(); track error.kind) {
          <p>{{ error.message }}</p>
          }
        </div>
        }

        <label for="airline-iata-code">IATA-Code</label>
        <input
          id="airline-iata-code"
          type="text"
          [formField]="airlineForm.iataCode"
        />

        <label for="airline-country">Land</label>
        <input
          id="airline-country"
          type="text"
          [formField]="airlineForm.country"
        />

        <label for="airline-alliance">Allianz</label>
        <input
          id="airline-alliance"
          type="text"
          [formField]="airlineForm.alliance"
        />

        <label for="airline-founded-year">Gruendungsjahr</label>
        <input
          id="airline-founded-year"
          type="number"
          [formField]="airlineForm.foundedYear"
        />

        <label for="airline-website">Website</label>
        <input
          id="airline-website"
          type="url"
          [formField]="airlineForm.website"
        />

        @if ( airlineForm.foundedYear().invalid() &&
        (airlineForm.foundedYear().dirty() ||
        airlineForm.foundedYear().touched()) ) {
        <div>
          @for (error of airlineForm.foundedYear().errors(); track error.kind) {
          <p>{{ error.message }}</p>
          }
        </div>
        }

        <button type="submit" [disabled]="airlineForm().invalid()">
          Airline anlegen
        </button>
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
          <p>
            <strong>{{ airline.name }}</strong>
            @if (airline.iataCode) {
            <span> ({{ airline.iataCode }})</span>
            }
          </p>
          @if (airline.country || airline.alliance || airline.foundedYear ||
          airline.website) {
          <p>
            @if (airline.country) {
            <span>Land: {{ airline.country }}</span>
            } @if (airline.alliance) {
            <span> | Allianz: {{ airline.alliance }}</span>
            } @if (airline.foundedYear) {
            <span> | Seit: {{ airline.foundedYear }}</span>
            } @if (airline.website) {
            <span> | Website: {{ airline.website }}</span>
            }
          </p>
          }
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
  protected readonly nameInput =
    viewChild<ElementRef<HTMLInputElement>>('nameInput');

  readonly airlineModel = signal<AirlineFormModel>({ ...initAirlineFormModel });
  readonly airlineForm = form(
    this.airlineModel,
    (schemaPath) => {
      required(schemaPath.name, {
        message: 'Bitte einen Airline-Namen eingeben.',
      });
      minLength(schemaPath.name, 2, {
        message: 'Der Name muss mindestens 2 Zeichen haben.',
      });
      pattern(schemaPath.name, airlineNamePattern, {
        message: 'Nur Buchstaben und Leerzeichen sind erlaubt.',
      });
    },
    {
      submission: {
        action: async (form) => {
          this.store.clearFeedback();

          const model = form().value();
          const result = this.store.addAirline({
            name: model.name,
            iataCode: model.iataCode,
            country: model.country,
            alliance: model.alliance,
            foundedYear: model.foundedYear ?? undefined,
            website: model.website,
          });

          if (!result.ok) {
            return;
          }

          this.airlineModel.set({ ...initAirlineFormModel });
          form().reset();
          this.nameInput()?.nativeElement.focus();
        },
      },
    }
  );

  remove(id: number): void {
    this.store.removeAirline(id);
  }
}
