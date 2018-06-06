import { BlockchainService } from './../../services/blockchain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transactions: any[];
  userId: string
  amount: number

  constructor(private blockchain: BlockchainService) {
  }

  async ngOnInit () {
    this.userId = localStorage.getItem('login')
    this.transactions = await this.blockchain.getTransactions(this.userId)
    this.amount = await this.blockchain.amount(this.userId)
  }

 async sendTransaction(to, amount) {
    await this.blockchain.sendTransaction(this.userId, to, amount)
    window.location.reload();
  }
}
