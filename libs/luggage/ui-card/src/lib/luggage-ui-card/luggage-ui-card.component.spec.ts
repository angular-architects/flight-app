import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggageUiCardComponent } from './luggage-ui-card.component';

describe('LuggageUiCardComponent', () => {
  let component: LuggageUiCardComponent;
  let fixture: ComponentFixture<LuggageUiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuggageUiCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LuggageUiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
