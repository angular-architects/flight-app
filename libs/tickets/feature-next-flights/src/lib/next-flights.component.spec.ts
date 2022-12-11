import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextFlightsComponent } from './next-flights.component';

describe('NextFlightsComponent', () => {
  let component: NextFlightsComponent;
  let fixture: ComponentFixture<NextFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextFlightsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NextFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
