import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Passenger } from './passenger.model';
import * as PassengerActions from './passenger.actions';

export const passengersFeatureKey = 'passengers';

export interface State extends EntityState<Passenger> {
  // additional entities state properties

  loading: boolean;
  errorMessage: string;
}

export const adapter: EntityAdapter<Passenger> =
  createEntityAdapter<Passenger>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: true,
  errorMessage: '',
});

export const reducer = createReducer(
  initialState,
  on(PassengerActions.addPassenger, (state, action) =>
    adapter.addOne(action.passenger, state)
  ),
  on(PassengerActions.upsertPassenger, (state, action) =>
    adapter.upsertOne(action.passenger, state)
  ),
  on(PassengerActions.addPassengers, (state, action) =>
    adapter.addMany(action.passengers, state)
  ),
  on(PassengerActions.upsertPassengers, (state, action) =>
    adapter.upsertMany(action.passengers, state)
  ),
  on(PassengerActions.updatePassenger, (state, action) =>
    adapter.updateOne(action.passenger, state)
  ),
  on(PassengerActions.updatePassengers, (state, action) =>
    adapter.updateMany(action.passengers, state)
  ),
  on(PassengerActions.deletePassenger, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(PassengerActions.deletePassengers, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(PassengerActions.loadPassengers, (state, action) =>
    adapter.setAll(action.passengers, state)
  ),
  on(PassengerActions.clearPassengers, (state) => adapter.removeAll(state))
);

export const passengersFeature = createFeature({
  name: passengersFeatureKey,
  reducer,
  extraSelectors: ({ selectPassengersState }) => ({
    ...adapter.getSelectors(selectPassengersState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } =
  passengersFeature;
