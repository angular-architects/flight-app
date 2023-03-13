import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateStepperComponent } from './date-stepper.component';

describe('DateStepperComponent', () => {
  let component: DateStepperComponent;
  let fixture: ComponentFixture<DateStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DateStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
