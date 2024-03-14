import { TestBed } from '@angular/core/testing';

import { AccessibilityWidgetService } from './accessibility-widget.service';

describe('AccessibilityWidgetService', () => {
  let service: AccessibilityWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessibilityWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
