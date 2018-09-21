import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coinsFullData: any;
  coinsData: any;
  // tslint:disable-next-line:max-line-length
  currencies = [
    'USD',
    'EUR',
    'JPY',
    'BGN',
    'CZK',
    'DKK',
    'GBP',
    'HUF',
    'PLN',
    'RON',
    'SEK',
    'CHF',
    'NOK',
    'HRK',
    'RUB',
    'TRY',
    'AUD',
    'BRL',
    'CAD',
    'CNY',
    'HKD',
    'IDR',
    'ILS',
    'INR',
    'KRW',
    'MXN',
    'MYR',
    'NZD',
    'PHP',
    'SGD',
    'THB',
    'ZAR',
    'BTC',
    'ETH'
  ];
  times = ['24h', '7d', '30d'];
  constructor(private _http: ApiService) {}

  ngOnInit() {
    this._http.getAll().subscribe(
      data => {
        this.coinsFullData = data;
        console.log(data);
        this.dataFilter(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  dataFilter(fullData) {
    this.coinsData = fullData.data.coins;
  }
  update(val: NgForm) {
    console.log(val.value);
    // this._http.getAll(val.srcElement.value).subscribe(
    //   data => {
    //     this.coinsFullData = data;
    //     console.log(data);
    //     this.dataFilter(data);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
  // changeTime(val) {
  //   console.log(val.srcElement.value);
  //   this._http.getAll( , val.srcElement.value).subscribe(
  //     data => {
  //       this.coinsFullData = data;
  //       console.log(data);
  //       this.dataFilter(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
