import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { FlightSearchComponent } from './flight-search.component';

describe('Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  let ctrl: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSearchComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    ctrl = TestBed.inject(HttpTestingController);

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

    const req = ctrl.expectOne('/flight?from=Graz&to=Hamburg');

    req.flush([
      {
        id: 22,
        from: 'here',
        to: 'there',
        date: '',
        delayed: false,
      },
      {
        id: 23,
        from: 'here',
        to: 'there',
        date: '',
        delayed: false,
      },
      {
        id: 23,
        from: 'here',
        to: 'there',
        date: '',
        delayed: false,
      },
    ]);

    expect(component.flights.length).toBe(3);
    ctrl.verify();
  });

  it('should *not* load flights when user did not enter from and to', () => {
    component.from = '';
    component.to = '';
    component.search();

    expect(component.flights.length).toBe(0);
    ctrl.verify();
  });
});
