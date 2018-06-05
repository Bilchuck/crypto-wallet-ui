import { BlockchainService } from './../../services/blockchain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transactions: any[];

  constructor(private blockchain: BlockchainService) {
  }

  async ngOnInit () {
    const userName = localStorage.getItem('login')
    this.transactions = await this.blockchain.getTransactions(userName)
    console.log(1)
  }

}
