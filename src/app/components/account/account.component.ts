import { BlockchainService } from './../../services/blockchain.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountId: string;
  transactions: any[];

  constructor(
    private router: ActivatedRoute,
    private blockchain: BlockchainService
  ) { }

  async ngOnInit() {
    this.router.params.subscribe(params => {
      this.accountId = params.id
    })
    this.transactions = await this.blockchain.getTransactions(this.accountId)
  }

}
