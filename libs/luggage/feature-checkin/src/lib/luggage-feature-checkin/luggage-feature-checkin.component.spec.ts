import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LuggageFeatureCheckinComponent } from './luggage-feature-checkin.component';

describe('LuggageFeatureCheckinComponent', () => {
  let component: LuggageFeatureCheckinComponent;
  let fixture: ComponentFixture<LuggageFeatureCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuggageFeatureCheckinComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LuggageFeatureCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
