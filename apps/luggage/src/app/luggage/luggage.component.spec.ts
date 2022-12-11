import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggageComponent } from './luggage.component';

describe('LuggageComponent', () => {
  let component: LuggageComponent;
  let fixture: ComponentFixture<LuggageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuggageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LuggageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
