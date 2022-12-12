import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLookupComponent } from './flight-lookup.component';

describe('FlightLookupComponent', () => {
  let component: FlightLookupComponent;
  let fixture: ComponentFixture<FlightLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightLookupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
