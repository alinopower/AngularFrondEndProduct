import { TestBed } from '@angular/core/testing';

import { ChartProduitService } from './chart-produit.service';

describe('ChartProduitService', () => {
  let service: ChartProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
