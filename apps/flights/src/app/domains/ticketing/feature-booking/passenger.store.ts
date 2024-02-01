import {
  withCallState,
  withDataService,
  withDevtools,
  withUndoRedo,
} from '@angular-architects/ngrx-toolkit';
import { signalStore, type } from '@ngrx/signals';
import { Passenger, PassengerService } from '../data';
import { withEntities } from '@ngrx/signals/entities';

export const PassengerStore = signalStore(
  { providedIn: 'root' },
  withCallState({ collection: 'passenger' }),
  withEntities({
    collection: 'passenger',
    entity: type<Passenger>(),
  }),
  withDataService({
    collection: 'passenger',
    dataServiceType: PassengerService,
    filter: { firstName: '', name: 'Smith' },
  }),
  withUndoRedo({
    collections: ['passenger'],
  }),
  withDevtools('passenger')
);
