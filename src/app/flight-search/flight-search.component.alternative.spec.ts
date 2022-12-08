import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { FlightSearchComponent } from './flight-search.component';
import { FlightService } from './flight.service';
import { DummyFlightService } from './dummy-flight.service';

describe('Alternative Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlightSearchComponent],
      providers: [
        provideHttpClient(),
        {
          provide: FlightService,
          useClass: DummyFlightService,
        },
      ],
    });

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have any flights loaded initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should load flights when user entered from and to', () => {
    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();

    expect(component.flights.length).toBe(3);
  });

  it('should *not* load flights when user did not enter from and to', () => {
    component.from = '';
    component.to = '';
    component.search();

    expect(component.flights.length).toBe(0);
  });
});
