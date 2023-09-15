import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Passenger } from './passenger.model';

export const loadPassengers = createAction(
  '[Passenger/API] Load Passengers',
  props<{ passengers: Passenger[] }>()
);

export const addPassenger = createAction(
  '[Passenger/API] Add Passenger',
  props<{ passenger: Passenger }>()
);

export const upsertPassenger = createAction(
  '[Passenger/API] Upsert Passenger',
  props<{ passenger: Passenger }>()
);

export const addPassengers = createAction(
  '[Passenger/API] Add Passengers',
  props<{ passengers: Passenger[] }>()
);

export const upsertPassengers = createAction(
  '[Passenger/API] Upsert Passengers',
  props<{ passengers: Passenger[] }>()
);

export const updatePassenger = createAction(
  '[Passenger/API] Update Passenger',
  props<{ passenger: Update<Passenger> }>()
);

export const updatePassengers = createAction(
  '[Passenger/API] Update Passengers',
  props<{ passengers: Update<Passenger>[] }>()
);

export const deletePassenger = createAction(
  '[Passenger/API] Delete Passenger',
  props<{ id: string }>()
);

export const deletePassengers = createAction(
  '[Passenger/API] Delete Passengers',
  props<{ ids: string[] }>()
);

export const clearPassengers = createAction('[Passenger/API] Clear Passengers');
