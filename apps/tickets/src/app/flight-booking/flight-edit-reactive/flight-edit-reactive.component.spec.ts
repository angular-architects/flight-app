import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEditReactiveComponent } from './flight-edit-reactive.component';

describe('FlightEditReactiveComponent', () => {
  let component: FlightEditReactiveComponent;
  let fixture: ComponentFixture<FlightEditReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightEditReactiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightEditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
