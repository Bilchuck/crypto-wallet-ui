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
}
