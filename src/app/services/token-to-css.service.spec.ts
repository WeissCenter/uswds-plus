import { TestBed } from '@angular/core/testing';

import { TokenToCssService } from './token-to-css.service';

describe('TokenToCssService', () => {
  let service: TokenToCssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenToCssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
