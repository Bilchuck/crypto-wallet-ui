import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

const URL = 'http://localhost:4444'
@Injectable({
  providedIn: 'root'
})
export class BlockchainHttpService {

  constructor(private http: Http) { }

  getTransactions(user): Promise<Array<any>> {
    return this.http.get(`${URL}/transaction`, { params: { user } }).toPromise()
      .then(r => r.json())
  }
  sendTransaction(from, to, amount): Promise<void> {
    return this.http.post(`${URL}/transaction`, {
      from,
      to,
      amount
    }).toPromise()
      .then(r => r.json())
  }

  amount(id): Promise<any> {
    return this.http.get(`${URL}/amount`, {
      params: { id }
    }).toPromise()
      .then(r => r.json())
  }
}
