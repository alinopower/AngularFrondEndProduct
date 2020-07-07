import { TestBed } from '@angular/core/testing';

import { AuhtenService } from './auhten.service';

describe('AuhtenService', () => {
  let service: AuhtenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuhtenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
