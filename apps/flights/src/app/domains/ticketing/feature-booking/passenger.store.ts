import {
  withCallState,
  withDataService,
  withDevtools,
  withUndoRedo,
} from '@angular-architects/ngrx-toolkit';
import { signalStore } from '@ngrx/signals';
import { Passenger, PassengerService } from '../data';
import { withEntities } from '@ngrx/signals/entities';

export const PassengerStore = signalStore(
  { providedIn: 'root' },
  withCallState(),
  withEntities<Passenger>(),
  withDataService({
    dataServiceType: PassengerService,
    filter: { firstName: '', name: 'Smith' },
  }),
  withUndoRedo(),
  withDevtools('passenger')
);
