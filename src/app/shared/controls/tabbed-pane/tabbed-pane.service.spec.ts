import { TestBed } from '@angular/core/testing';

import { TabbedPaneService } from './tabbed-pane.service';

describe('TabbedPaneService', () => {
  let service: TabbedPaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabbedPaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
