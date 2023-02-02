import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedPaneComponent } from './tabbed-pane.component';

describe('TabbedPaneComponent', () => {
  let component: TabbedPaneComponent;
  let fixture: ComponentFixture<TabbedPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbedPaneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabbedPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
