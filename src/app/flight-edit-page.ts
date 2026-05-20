import {
  Component,
  inject,
  input,
  linkedSignal,
  numberAttribute,
} from '@angular/core';
import {
  form,
  FormField,
  FormRoot,
  validateStandardSchema,
} from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { FlightClient } from './flight-client';
import { Flight, flightSchema } from './model/flight';

const emptyFlight: Flight = {
  id: 0,
  from: '',
  to: '',
  date: '',
  delayed: false,
};

@Component({
  selector: 'app-flight-edit',
  template: `
    <h3>{{ id() }}</h3>

    @if (flight.hasValue()) {
      <div>
        <form [formRoot]="flightForm">
          <div class="form-group">
            <label>Id</label>
            <input
              [formField]="flightForm.id"
              type="number"
              class="form-control"
            />

            @for (error of flightForm.id().errors(); track error) {
              <div class="alert alert-danger">
                {{ error.message }}
              </div>
            }
          </div>

          <div class="form-group">
            <label
              >From
              <input [formField]="flightForm.from" class="form-control" />
            </label>
            @for (error of flightForm.from().errors(); track error) {
              <div class="alert alert-danger">
                {{ error.message }}
              </div>
            }
          </div>

          <div class="form-group">
            <label
              >To
              <input [formField]="flightForm.to" class="form-control" />
            </label>
            @for (error of flightForm.to().errors(); track error) {
              <div class="alert alert-danger">
                {{ error.message }}
              </div>
            }
          </div>

          <div class="form-group">
            <label>Date</label>
            <input [formField]="flightForm.date" class="form-control" />

            @for (error of flightForm.date().errors(); track error) {
              <div class="alert alert-danger">
                {{ error.message }}
              </div>
            }
          </div>

          <div class="form-group form-check">
            <input
              [formField]="flightForm.delayed"
              type="checkbox"
              class="form-check-input"
              id="delayedCheck"
            />
            <label class="form-check-label" for="delayedCheck">Delayed</label>

            @for (error of flightForm.delayed().errors(); track error) {
              <div class="alert alert-danger">
                {{ error.message }}
              </div>
            }
          </div>

          <div>
            <button
              type="submit"
              [disabled]="flightForm().invalid()"
              class="btn btn-primary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    } @else {
      <p>Loading the data...</p>
    }

    <a [routerLink]="['..', id() - 1]">⬅️</a>
    <a [routerLink]="['..', id() + 1]">➡️</a>
  `,
  imports: [RouterLink, FormRoot, FormField],
})
export class FlightEditPage {
  readonly id = input.required({ transform: numberAttribute });

  private readonly router = inject(Router);
  private readonly flightClient = inject(FlightClient);
  protected readonly flight = this.flightClient.findById(this.id);
  protected readonly flightModel = linkedSignal(() => {
    console.log(this.flight.value());
    return this.flight.hasValue() ? this.flight.value() : emptyFlight;
  });

  flightForm = form(
    this.flightModel,
    (path) => {
      validateStandardSchema(path, flightSchema);
    },
    {
      submission: {
        action: async () => {
          await firstValueFrom(this.flightClient.save(this.flightModel()));
          const { from, to } = this.flightModel();
          this.router.navigate(['/flight-search'], {
            queryParams: { from, to },
          });
        },
      },
    },
  );
}

export default FlightEditPage;
