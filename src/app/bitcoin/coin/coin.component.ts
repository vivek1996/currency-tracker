import { Component, OnInit } from '@angular/core';
import { CoindeskapiService } from '../../coindeskapi.service';
@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  constructor(private _http: CoindeskapiService) {}

  ngOnInit() {
    this._http.getCurrentPrice().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
