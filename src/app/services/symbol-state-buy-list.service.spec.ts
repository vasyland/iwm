import { TestBed } from '@angular/core/testing';

import { SymbolStateBuyListService } from './symbol-state-buy-list.service';

describe('SymbolStateBuyListService', () => {
  let service: SymbolStateBuyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymbolStateBuyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
