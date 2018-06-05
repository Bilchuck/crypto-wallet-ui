import { TestBed, inject } from '@angular/core/testing';

import { BlockchainHttpService } from './blockchain-http.service';

describe('BlockchainHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockchainHttpService]
    });
  });

  it('should be created', inject([BlockchainHttpService], (service: BlockchainHttpService) => {
    expect(service).toBeTruthy();
  }));
});
