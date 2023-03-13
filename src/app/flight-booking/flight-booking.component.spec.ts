import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookingComponent } from './flight-booking.component';

describe('FlightBookingComponent', () => {
  let component: FlightBookingComponent;
  let fixture: ComponentFixture<FlightBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
