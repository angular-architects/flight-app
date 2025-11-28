import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { FlightSearchComponent } from './flight-search.component';
import { FlightService } from './flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { vi } from 'vitest';
import { of } from 'rxjs';

describe('Alternative Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  let flightService: FlightService;

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

    flightService = TestBed.inject(FlightService);
    vi.spyOn(flightService, 'find');
    // vi.spyOn(flightService, 'find').mockImplementation((_from, _to) => of([]))

    component = fixture.componentInstance;
  });

  it('should not have any flights loaded initially', () => {
    expect(component.flights().length).toBe(0);
  });

  it('should load flights when user entered from and to', () => {
    component.filterForm().value.update((value) => ({
      ...value,
      from: 'Graz',
      to: 'Hamburg',
    }));
    component.search();

    expect(component.flights().length).toBe(3);
    expect(flightService.find).toHaveBeenCalled();
  });

  it('should *not* load flights when user did not enter from and to', () => {
    component.filterForm().value.update((value) => ({
      ...value,
      from: '',
      to: '',
    }));

    component.search();

    expect(component.flights().length).toBe(0);
    expect(flightService.find).not.toHaveBeenCalled();
  });
});
