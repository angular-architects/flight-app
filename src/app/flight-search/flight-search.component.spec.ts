import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { FlightSearchComponent } from './flight-search.component';
import { expect } from 'vitest';
import { page } from 'vitest/browser';

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
    expect(component.flights().length).toBe(0);
  });

  it('should load flights when user entered from and to', () => {
    component.from.set('Graz');
    component.to.set('Hamburg');
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

    expect(component.flights().length).toBe(3);
    ctrl.verify();
  });

  it('should *not* load flights when user did not enter from and to', () => {
    component.from.set('');
    component.to.set('');
    component.search();

    expect(component.flights().length).toBe(0);
    ctrl.verify();
  });

  it('should have a disabled search button w/o params', async () => {

    await page.getByLabelText('from').fill('');
    await page.getByLabelText('to').fill('');

    const button = page.getByRole('button', { name: 'search' }).element() as HTMLButtonElement;
    const disabled = button.disabled;

    expect(disabled).toBeTruthy();
  });
});
