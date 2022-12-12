import {
  AfterViewInit,
  Component,
  inject,
  Injector,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NextFlightsService } from './next-flights.service';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Store } from '@ngrx/store';
import {
  selectPassengersWithTickets,
  selectTicketsWithPassengers,
  ticketsFeature,
} from '@flight-demo/tickets/domain';

@Component({
  selector: 'app-next-flights',
  templateUrl: './next-flights.component.html',
  styleUrls: ['./next-flights.component.css'],
})
export class NextFlightsComponent implements AfterViewInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder: ViewContainerRef | undefined;

  injector = inject(Injector);
  nextFlightsService = inject(NextFlightsService);
  flights$ = this.nextFlightsService.load();

  store = inject(Store);
  tickets = this.store.select(selectTicketsWithPassengers);
  passengers = this.store.select(selectPassengersWithTickets);

  comp: Type<unknown> | undefined;

  async ngAfterViewInit() {
    if (!this.placeholder) return;

    //
    // Module Federation commented out to simplify further labs.
    // Feel free to uncomment this again.
    //

    // const m = await loadRemoteModule('checkin', './Component');
    // this.placeholder.createComponent(m.AppComponent, {
    //   injector: this.injector,
    // });

    // Working with properties and events:
    // const comp = this.placeholder.createComponent(m.AppComponent, { injector: this.injector });
    // comp.setInput('myProp', 'value');
    // comp.instance['event'].subscribe(...)
  }
}
