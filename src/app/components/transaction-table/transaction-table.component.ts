import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  @Input('transactions') transactions: any[];
  @Input('accountId') accountId: any[];

  constructor() { }

  ngOnInit() {
  }

}
