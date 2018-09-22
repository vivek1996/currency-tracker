import { Injectable } from '@angular/core';
// import { BitcoinModule } from './bitcoin/bitcoin.module';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoindeskapiService {
  private baseUrl = `https://api.coindesk.com/v1/bpi`;
  constructor(private http: HttpClient) {}
  getCurrentPrice(currecy = 'INR') {
    return this.http.get(`${this.baseUrl}/currentprice/${currecy}.json`);
  }
}
