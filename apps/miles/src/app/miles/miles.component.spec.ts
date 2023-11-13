import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesComponent } from './miles.component';

describe('MilesComponent', () => {
  let component: MilesComponent;
  let fixture: ComponentFixture<MilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MilesComponent],
    });
    fixture = TestBed.createComponent(MilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
