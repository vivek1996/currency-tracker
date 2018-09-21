import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://api.coinranking.com/v1/public';
  constructor(private http: HttpClient) {}
  // data for home page : all coin data
  getAll(base = 'INR', time = '24h') {
    return this.http.get(
      `${this.baseUrl}/coins?base=${base}&timePeriod=${time}`
    );
  }
  // get data of single coin
  getCoin(id, base = 'INR', time = '24h') {
    return this.http.get(
      `${this.baseUrl}/coin/${id}?base=${base}&timePeriod=${time}`
    );
  }
}
