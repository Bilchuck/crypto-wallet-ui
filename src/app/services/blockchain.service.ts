import { BlockchainHttpService } from './blockchain-http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(private blockchainHttp: BlockchainHttpService) { }

  getTransactions(user): Promise<Array<any>> {
    return this.blockchainHttp.getTransactions(user)
  }
}
