import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coinsFullData: any;
  coinsData: any;
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
}
