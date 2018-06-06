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

  sendTransaction(from, to, amount): Promise<void> {
    return this.blockchainHttp.sendTransaction(from, to, amount)
  }

  amount(id): Promise<number> {
    return this.blockchainHttp.amount(id)
      .then(res => res.amount)
  }
}
